<template>
  <div class="q-pa-md">
    <div v-if="!editing" class="text-h4 q-pa-md row justify-center text-primary">
      Nova Rua
    </div>
    <div v-else class="text-h4 q-pa-md row justify-center text-primary">
      Editar Rua
    </div>
    <div class="row justify-center">
      <q-card class="q-pa-md" style="width: 800px;">
        <q-form 
          class="q-gutter-md" 
          @submit.prevent="onSubmit"
          @reset="onReset"
        >
          <q-input
            filled
            v-model="rua.nomeRua"
            label="Nome da Rua"
            lazy-rules
          />
          <q-input
            type="number"
            filled
            v-model="rua.qtdLatasLixo"
            label="Quantidade de Latas de Lixo"
            lazy-rules
          />
          <q-input
            type="number"
            filled
            v-model="rua.qtdCasas"
            label="Quantidade de Casas"
            lazy-rules
          />
          <div class="float-right">
            <q-btn v-if="!editing" label="Limpar" type="reset" color="primary" flat class="q-ml-sm" />
            <q-btn :label="editing ? 'Salvar' : 'Cadastrar'" type="submit" color="primary"/>
          </div>
        </q-form>
      </q-card>
    </div>
  </div>
</template>

<script>
import Rua from 'src/model/Rua'

export default {
  
  data() {
    return {
      rua: new Rua(),
      editing: false,
    }
  },
  methods: {
    async getUser() {
      try {
        const response = await this.$api.get(`rua/${this.rua.id}`);
        this.rua = response.data;
      } catch(err) {
        this.$q.notify({
          type: "negative",
          message: "Não foi possível obter a rua"
        })
        this.$router.push({
          name: 'admin.ruas'
        });
      }
    },
    async onSubmit() {
      try {
        if(this.editing) {
          // atualiza a rua existente
          await this.$api.put(`/rua/${this.rua.id}`, this.rua);
          this.$q.notify({
            type: "positive",
            message: "Atualizado com sucesso!"
          });
        } else {
          // cria nova noza
          await this.$api.post('/rua', this.rua);
          this.$q.notify({
            type: "positive",
            message: "Cadastrado com sucesso!"
          });
        }
        this.$router.push({
          name: 'admin.ruas'
        });
      }catch(err) {
        this.$q.notify({
          type: "negative",
          message: err.response.data.message || err.message
        })
      }

    },
    onReset() {
      this.rua = new Rua();
    },
  },
  created() {
    this.rua.id = this.$route.params.id;
    if(this.rua.id) {
      this.editing = true;
      this.getUser();
    }
  }
}
</script>

<style>

</style>