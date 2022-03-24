<template>
  <div class="q-pa-md">
    <div v-if="!editing" class="text-h4 q-pa-md row justify-center text-primary">
      Nova Manutenção
    </div>
    <div v-else class="text-h4 q-pa-md row justify-center text-primary">
      Editar Manutenção
    </div>
    <div class="row justify-center">
      <q-card class="q-pa-md" style="width: 800px;">
        <q-form 
          class="q-gutter-md" 
          @submit.prevent="onSubmit"
          @reset="onReset"
        >
        <!--verificar se funciona-->
            <q-date v-model="date" />
            <q-date
                v-model="manutencao.data"
                minimal
                filled
                label="Data da manutenção"
                lazy-rules
            />
          <!--verificar se funciona-->
          <!--<q-input
              type="number"
              min="1900" 
              :max="new Date().toString()"
              label="Data da manutenção"
              filled
              v-model="manutencao.data"
              lazy-rules
          />-->
          <q-input
            type="number"
            filled
            v-model="manutencao.quilometragem"
            label="Quilometragem"
            lazy-rules
          />
          <q-input
            filled
            v-model="manutencao.descricao"
            label="Descrição do serviço"
            lazy-rules
          />
          <q-input
            type="float"
            filled
            v-model="manutencao.valor"
            label="Valor"
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
import Manutencao from 'src/model/Manutencao'

export default {
  
  data() {
    return {
      manutencao: new Manutencao(),
      editing: false,
    }
  },
  methods: {
    async getUser() {
      try {
        const response = await this.$api.get(`manutencao/${this.manutencao.id}`);
        this.manutencao = response.data;
      } catch(err) {
        this.$q.notify({
          type: "negative",
          message: "Não foi possível encontrar essa manutenção"
        })
        this.$router.push({
          name: 'admin.manutencoes'
        });
      }
    },
    async onSubmit() {
      try {
        if(this.editing) {
          // atualiza a manutenção existente
          await this.$api.put(`/manutencao/${this.manutencao.id}`, this.manutencao);
          this.$q.notify({
            type: "positive",
            message: "Atualizado com sucesso!"
          });
        } else {
          // cria nova manutenção
          await this.$api.post('/manutencao', this.manutencao);
          this.$q.notify({
            type: "positive",
            message: "Cadastrado com sucesso!"
          });
        }
        this.$router.push({
          name: 'admin.manutencoes'
        });
      }catch(err) {
        this.$q.notify({
          type: "negative",
          message: err.response.data.message || err.message
        })
      }

    },
    onReset() {
      this.manutencao = new Manutencao();
    },
  },
  created() {
    this.manutencao.id = this.$route.params.id;
    if(this.manutencao.id) {
      this.editing = true;
      this.getUser();
    }
  }
}
</script>

<style>

</style>