<template>
  <div class="q-pa-md">
    <div v-if="!editing" class="text-h4 q-pa-md row justify-center text-primary">
      Novo Caminhão
    </div>
    <div v-else class="text-h4 q-pa-md row justify-center text-primary">
      Editar Caminhão
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
            v-model="caminhao.placa"
            label="Placa"
            lazy-rules
            mask="XXX-XXXX"
            unmasked-value
            :rules="[ val => val && val.length == 7 || 'Placa inválida']"
          />
          <q-checkbox
            class="q-mb-md"
            name="situacao"
            v-model="caminhao.situacao"
            true-value="1"
            false-value="0"
            label="Ativo"
          />
          <q-input
            filled
            v-model="caminhao.modelo"
            label="Modelo"
            lazy-rules
          />
          <q-input
            filled
            v-model="caminhao.marca"
            label="Marca"
            lazy-rules
          />
          <q-input
            type="number"
            min="1900" 
            :max="new Date().getFullYear().toString()"
            label="Ano"
            filled
            v-model="caminhao.ano"
            lazy-rules
          />
          <q-input
            type="number"
            filled
            v-model="caminhao.quilometragem"
            label="Quilometragem"
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
import Caminhao from 'src/model/Caminhao'

export default {
  
  data() {
    return {
      caminhao: new Caminhao(),
      editing: false,
    }
  },
  methods: {
    async getUser() {
      try {
        const response = await this.$api.get(`caminhao/${this.caminhao.id}`);
        this.caminhao = response.data;
      } catch(err) {
        this.$q.notify({
          type: "negative",
          message: "Não foi possível obter o caminhão"
        })
        this.$router.push({
          name: 'admin.caminhoes'
        });
      }
    },
    async onSubmit() {
      try {
        if(this.editing) {
          // atualiza o caminhao existente
          await this.$api.put(`/caminhao/${this.caminhao.id}`, this.caminhao);
          this.$q.notify({
            type: "positive",
            message: "Atualizado com sucesso!"
          });
        } else {
          // cria novo usuario
          await this.$api.post('/caminhao', this.caminhao);
          this.$q.notify({
            type: "positive",
            message: "Cadastrado com sucesso!"
          });
        }
        this.$router.push({
          name: 'admin.caminhoes'
        });
      }catch(err) {
        this.$q.notify({
          type: "negative",
          message: err.response.data.message || err.message
        })
      }

    },
    onReset() {
      this.caminhao = new Caminhao();
    },
  },
  created() {
    this.caminhao.id = this.$route.params.id;
    if(this.caminhao.id) {
      this.editing = true;
      this.getUser();
    }
  }
}
</script>

<style>

</style>