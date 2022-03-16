<template>
  <div class="q-pa-md">
    <div v-if="!editing" class="text-h4 q-pa-md row justify-center text-primary">
      Novo Auxiliar
    </div>
    <div v-else class="text-h4 q-pa-md row justify-center text-primary">
      Editar Auxiliar
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
            v-model="auxiliar.nome"
            label="Nome"
            lazy-rules
            :rules="[ val => val && val.length > 2 || 'O nome deve ter no mínimo 3 caracteres']"
          />
          <q-checkbox
            class="q-mb-md"
            v-model="auxiliar.servicoComunitario"
            :true-value="1"
            :false-value="0"
            label="Serviço Comunitário"
          />
          <date-input
            filled 
            label="Data de Nascimento"
            v-model="auxiliar.dataNascimento"
            lazy-rules
          />
          <q-input
            filled
            v-model="auxiliar.cpf"
            label="CPF"
            lazy-rules
            mask="###.###.###-##"
            unmasked-value
          />
          <q-input
            filled
            v-model="auxiliar.usuario"
            label="Usuario"
            lazy-rules
            :rules="[ val => val && val.length > 2 || 'O usuario deve ter no mínimo 3 caracteres']"
          />
          <q-input
            type="password"
            filled
            v-model="auxiliar.senha"
            :label="editing ? 'Alterar Senha' : 'Senha'"
            lazy-rules
            :rules="editing ? [] : [ val => val && val.length > 2 || 'A senha deve ter no mínimo 3 caracteres']"
          />
          <q-input
            filled
            v-model="auxiliar.bairro"
            label="Bairro"
            lazy-rules
          />
          <q-input
            filled
            v-model="auxiliar.logradouro"
            label="Logradouro"
            lazy-rules
          />
          <q-input
            type="number"
            filled
            v-model="auxiliar.numero"
            label="Numero"
            lazy-rules
          />
          <q-input
            filled
            v-model="auxiliar.complemento"
            label="Complemento"
            lazy-rules
          />
          <q-input
            filled
            v-model="auxiliar.cep"
            label="CEP"
            lazy-rules
            mask="#####-###"
            unmasked-value
          />
          <q-select
            filled 
            v-model="auxiliar.uf"
            emit-value
            map-options
            :options="estados"
            option-value="value"
            option-label="label"
            label="UF"
            behavior="menu"
          />
          <q-select
            filled
            v-model="auxiliar.cidade"
            :options="cidades"
            label="Cidade"
            behavior="menu"
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
import Auxiliar from 'src/model/Auxiliar'
import DateInput from '../../../components/DateInput.vue'
import brasil from "../../../utils/brasil";

const estados = [
  { value: null, label: "Selecione um estado" },
  { value: "AC", label: "Acre" },
  { value: "AL", label: "Alagoas" },
  { value: "AP", label: "Amapá" },
  { value: "AM", label: "Amazonas" },
  { value: "BA", label: "Bahia" },
  { value: "CE", label: "Ceará" },
  { value: "DF", label: "Distrito Federal" },
  { value: "ES", label: "Espírito Santo" },
  { value: "GO", label: "Goiás" },
  { value: "MA", label: "Maranhão" },
  { value: "MT", label: "Mato Grosso" },
  { value: "MS", label: "Mato Grosso do Sul" },
  { value: "MG", label: "Minas Gerais" },
  { value: "PA", label: "Pará" },
  { value: "PB", label: "Paraíba" },
  { value: "PR", label: "Paraná" },
  { value: "PE", label: "Pernambuco" },
  { value: "PI", label: "Piauí" },
  { value: "RJ", label: "Rio de Janeiro" },
  { value: "RN", label: "Rio Grande do Norte" },
  { value: "RS", label: "Rio Grande do Sul" },
  { value: "RO", label: "Rondônia" },
  { value: "RR", label: "Roraima" },
  { value: "SC", label: "Santa Catarina" },
  { value: "SP", label: "São Paulo" },
  { value: "SE", label: "Sergipe" },
  { value: "TO", label: "Tocantins" }
];

export default {
  
  components: {
    DateInput,
  },
  data() {
    return {
      estados,
      cidades: [],
      brasil,
      auxiliar: new Auxiliar(),
      editing: false,
    }
  },
  computed: {
    //retorna o objeto do estado de acordo com o uf do usuario
    estado: function() {
      return estados.filter(
        (obj) => obj.value === this.auxiliar.uf
      )[0];
    }
    
  },
  methods: {
    async getUser() {
      try {
        const response = await this.$api.get(`auxiliar/${this.auxiliar.id}`);
        this.auxiliar = response.data;
      } catch(err) {
        this.$q.notify({
          type: "negative",
          message: "Não foi possível obter o usuario"
        })
        this.$router.push({
          name: 'admin.auxiliares'
        });
      }
    },
    async onSubmit() {
      try {
        if(this.editing) {
          // atualiza usuario existente
          await this.$api.put(`/auxiliar/${this.auxiliar.id}`, this.auxiliar);
          this.$q.notify({
            type: "positive",
            message: "Atualizado com sucesso!"
          });
        } else {
          // cria novo usuario
          await this.$api.post('/auxiliar', this.auxiliar);
          this.$q.notify({
            type: "positive",
            message: "Cadastrado com sucesso!"
          });
        }
        this.$router.push({
          name: 'admin.auxiliares'
        });
      }catch(err) {
        this.$q.notify({
          type: "negative",
          message: err.response.data.message || err.message
        })
      }

    },
    onReset() {
      this.auxiliar = new Auxiliar();
    },
  },
  watch: {
    'estado': function () {
      this.cidades = brasil[this.estado.value].cidades
    }
  },
  created() {
    this.auxiliar.id = this.$route.params.id;
    if(this.auxiliar.id) {
      this.editing = true;
      this.getUser();
    }
  }
}
</script>

<style>

</style>