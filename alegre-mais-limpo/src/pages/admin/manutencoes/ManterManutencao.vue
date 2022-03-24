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
          <date-input
            filled 
            label="Data"
            v-model="manutencao.data"
            lazy-rules
            :disable="editing"
          />
          <q-select
            filled 
            v-model="manutencao.idCaminhaoColeta"
            emit-value
            map-options
            :options="caminhoes"
            option-value="id"
            option-label="placa"
            label="Caminhao"
            behavior="menu"
          />
          <q-input
            type="number"
            filled
            v-model="manutencao.quilometragem"
            label="Quilometragem"
            :max="maxQuilometragem"
            lazy-rules
          />
          <q-input
            filled
            v-model="manutencao.descricao"
            label="Descrição do serviço"
            lazy-rules
          />
          <q-input
            filled
            :model-value="parseFloat(manutencao.valor).toFixed(2)"
            @update:modelValue="
            (val) => {
              val ? manutencao.valor = (parseFloat(val)/100).toFixed(2) : manutencao.valor = '0'
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
import Manutencao from 'src/model/Manutencao'

export default {
  components: {
    DateInput
  },
  data() {
    return {
      manutencao: new Manutencao(),
      editing: false,
      caminhoes: []
    }
  },
  computed: {
    maxQuilometragem: function() {
      if(!this.manutencao.idCaminhaoColeta) {
        return 0;
      } else {
        return this.caminhoes.filter((val) => val.id == this.manutencao.idCaminhaoColeta)[0].quilometragem;
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
          name: 'admin.manutencoes'
        });
      }
    },
    async getManutencao() {
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
      this.getManutencao();
    }
    this.getCaminhoes();
  }
}
</script>

<style>

</style>