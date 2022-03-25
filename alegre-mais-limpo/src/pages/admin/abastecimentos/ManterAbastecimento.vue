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
          <date-input
            filled 
            label="Data"
            v-model="abastecimento.data"
            lazy-rules
            :disable="editing"
          />
          <q-select
            filled 
            v-model="abastecimento.idCaminhaoColeta"
            emit-value
            map-options
            @update:model-value="onSelectCaminhao"
            :options="caminhoes"
            option-value="id"
            option-label="placa"
            label="Caminhao"
            behavior="menu"
          />
          <q-input
            type="number"
            filled
            v-model="abastecimento.quilometragem"
            :max="maxQuilometragem"
            label="Quilometragem"
            lazy-rules
          />
          <q-input
            filled
            :model-value="parseFloat(abastecimento.quantidade).toFixed(2)"
            @update:modelValue="
            (val) => {
              val ? abastecimento.quantidade = (parseFloat(val)/100).toFixed(2) : abastecimento.quantidade = '0'
            }"
            fill-mask="0"
            unmasked-value
            reverse-fill-mask
            mask="#.##" 
            suffix="litros"
            label="Quantidade"
            lazy-rules
          />
          <q-input
            filled
            :model-value="parseFloat(abastecimento.valor).toFixed(2)"
            @update:modelValue="
            (val) => {
              val ? abastecimento.valor = (parseFloat(val)/100).toFixed(2) : abastecimento.valor = '0'
            }"
            fill-mask="0"
            unmasked-value
            reverse-fill-mask
            mask="#.##" 
            prefix="R$ "
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
import DateInput from '../../../components/DateInput.vue'
import Abastecimento from 'src/model/Abastecimento'

export default {
  components: {
    DateInput
  },
  data() {
    return {
      abastecimento: new Abastecimento(),
      editing: false,
      caminhoes: []
    }
  },
  computed: {
    maxQuilometragem: function() {
      if(!this.abastecimento.idCaminhaoColeta) {
        return 0;
      } else {
        return this.caminhoes.filter((val) => val.id == this.abastecimento.idCaminhaoColeta)[0].quilometragem;
      }
    }
  },
  methods: {
    async getCaminhoes() {
      try {
        const response = await this.$api.get(`caminhao`);
        this.caminhoes = response.data.caminhoes;
      } catch(err) {
        this.$q.notify({
          type: "negative",
          message: "Não foi possível obter os Caminhões"
        })
        this.$router.push({
          name: 'admin.abastecimentos'
        });
      }
    },
    async getAbastecimento() {
      try {
        const response = await this.$api.get(`abastecimento/${this.abastecimento.id}`);
        this.abastecimento = response.data;
      } catch(err) {
        this.$q.notify({
          type: "negative",
          message: "Não foi possível encontrar esse abastecimento"
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
          // cria novo abastecimento
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
      this.abastecimento = new Manutencao();
    },
    onSelectCaminhao(props) {
      this.abastecimento.quilometragem = this.maxQuilometragem;
    }
  },
  created() {
    this.abastecimento.id = this.$route.params.id;
    if(this.abastecimento.id) {
      this.editing = true;
      this.getAbastecimento();
    }
    this.getCaminhoes();
  }
}
</script>

<style>

</style>