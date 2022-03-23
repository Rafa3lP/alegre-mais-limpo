<template>
  <div class="q-pa-md">
    <div v-if="!editing" class="text-h4 q-pa-md row justify-center text-primary">
      Novo Abastecimento
    </div>
    <div v-else class="text-h4 q-pa-md row justify-center text-primary">
      Editar Abastecimento
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
            v-model="abastecimento.placa"
            label="Placa"
            lazy-rules
            mask="XXX-XXXX"
            unmasked-value
            :rules="[ val => val && val.length == 7 || 'Placa inválida']"
          />
          <!--verificar se funciona-->
          <q-date v-model="date" />
          <q-date
              v-model="abastecimento.data"
              minimal
              filled
              label="Data do abastecimento"
              lazy-rules
          />
          <!--verificar se funciona-->
          <!--<q-input
              type="number"
              min="1900" 
              :max="new Date().toString()"
              label="Data do abastecimento"
              filled
              v-model="abastecimento.data"
              lazy-rules
          />-->
          <q-input
            type="number"
            filled
            v-model="abastecimento.quantidade"
            label="Quantidade de combustível"
            lazy-rules
          />
          <q-input
            type="float"
            filled
            v-model="abastecimento.valor"
            label="Valor"
            lazy-rules
          />
          <q-input
            type="number"
            filled
            v-model="abastecimento.quilometragem"
            label="Quilometragem"
            lazy-rules
          />
          <q-input
            type="number"
            filled
            v-model="abastecimento.mediaConsumo"
            label="Média de Consumo"
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
import Abastecimento from 'src/model/Abastecimento'

export default {
  
  data() {
    return {
      abastecimento: new Abastecimento(),
      editing: false,
    }
  },
  methods: {
    async getUser() {
      try {
        const response = await this.$api.get(`abastecimento/${this.abastecimento.id}`);
        this.abastecimento = response.data;
      } catch(err) {
        this.$q.notify({
          type: "negative",
          message: "Não foi possível obter o abastecimento"
        })
        this.$router.push({
          name: 'admin.abastecimentos'
        });
      }
    },
    async onSubmit() {
      try {
        if(this.editing) {
          // atualiza o abastecimento existente
          await this.$api.put(`/abastecimento/${this.abastecimento.id}`, this.abastecimento);
          this.$q.notify({
            type: "positive",
            message: "Atualizado com sucesso!"
          });
        } else {
          // cria novo usuario
          await this.$api.post('/abastecimento', this.abastecimento);
          this.$q.notify({
            type: "positive",
            message: "Cadastrado com sucesso!"
          });
        }
        this.$router.push({
          name: 'admin.abastecimentos'
        });
      }catch(err) {
        this.$q.notify({
          type: "negative",
          message: err.response.data.message || err.message
        })
      }

    },
    onReset() {
      this.abastecimento = new Abastecimento();
    },
  },
  created() {
    this.abastecimento.id = this.$route.params.id;
    if(this.abastecimento.id) {
      this.editing = true;
      this.getUser();
    }
  }
}
</script>

<style>

</style>