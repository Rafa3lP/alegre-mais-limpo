<template>
  <div class="q-pa-md">
    <div v-if="!editing" class="text-h4 q-pa-md row justify-center text-primary">
      Novo Motorista
    </div>
    <div v-else class="text-h4 q-pa-md row justify-center text-primary">
      Editar Motorista
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
            v-model="motorista.nome"
            label="Nome"
            lazy-rules
            :rules="[ required ]"
          />
          <q-input
            filled
            v-model="motorista.numCarteira"
            label="Número da Carteira"
            lazy-rules
            mask="###########"
            :rules="[ required ]"
          />
          <date-input
            filled 
            label="Data de Nascimento"
            v-model="motorista.dataNascimento"
            lazy-rules
            :rules="[ required ]"
          />
          <q-input
            filled
            v-model="motorista.cpf"
            label="CPF"
            lazy-rules
            mask="###.###.###-##"
            unmasked-value
            :rules="[ required ]"
          />
          <q-input
            filled
            v-model="motorista.usuario"
            label="Usuario"
            lazy-rules
            :rules="[ val => val && val.length > 2 || 'O usuario deve ter no mínimo 3 caracteres']"
          />
          <q-input
            type="password"
            filled
            v-model="motorista.senha"
            :label="editing ? 'Alterar Senha' : 'Senha'"
            lazy-rules
            :rules="editing ? [] : [ val => val && val.length > 2 || 'A senha deve ter no mínimo 3 caracteres']"
          />
          <q-input
            filled
            v-model="motorista.bairro"
            label="Bairro"
            lazy-rules
            :rules="[ required ]"
          />
          <q-input
            filled
            v-model="motorista.logradouro"
            label="Logradouro"
            lazy-rules
            :rules="[ required ]"
          />
          <q-input
            type="number"
            filled
            v-model="motorista.numero"
            label="Numero"
            lazy-rules
            :rules="[ required ]"
          />
          <q-input
            filled
            v-model="motorista.complemento"
            label="Complemento"
            lazy-rules
          />
          <q-input
            filled
            v-model="motorista.cep"
            label="CEP"
            lazy-rules
            mask="#####-###"
            unmasked-value
            :rules="[ required ]"
          />
          <q-select
            filled 
            v-model="motorista.uf"
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
            v-model="motorista.cidade"
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
import Motorista from 'src/model/Motorista'
import DateInput from '../../../components/DateInput.vue'
import brasil from "../../../utils/brasil";
import { required } from "../../../utils/rules";

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
      motorista: new Motorista(),
      editing: false,
    }
  },
  computed: {
    //retorna o objeto do estado de acordo com o uf do usuario
    estado: function() {
      return estados.filter(
        (obj) => obj.value === this.motorista.uf
      )[0];
    }
    
  },
  methods: {
    required,
    async getUser() {
      try {
        const response = await this.$api.get(`motorista/${this.motorista.id}`);
        this.motorista = response.data;
      } catch(err) {
        this.$q.notify({
          type: "negative",
          message: "Não foi possível obter o usuario"
        })
        this.$router.push({
          name: 'admin.motoristas'
        });
      }
    },
    async onSubmit() {
      try {
        if(this.editing) {
          // atualiza usuario existente
          await this.$api.put(`/motorista/${this.motorista.id}`, this.motorista);
          this.$q.notify({
            type: "positive",
            message: "Atualizado com sucesso!"
          });
        } else {
          // cria novo usuario
          await this.$api.post('/motorista', this.motorista);
          this.$q.notify({
            type: "positive",
            message: "Cadastrado com sucesso!"
          });
        }
        this.$router.push({
          name: 'admin.motoristas'
        });
      }catch(err) {
        this.$q.notify({
          type: "negative",
          message: err.response.data.message || err.message
        })
      }

    },
    onReset() {
      this.motorista = new Motorista();
    },
  },
  watch: {
    'estado': function () {
      this.cidades = brasil[this.estado.value].cidades
    }
  },
  created() {
    this.motorista.id = this.$route.params.id;
    if(this.motorista.id) {
      this.editing = true;
      this.getUser();
    }
  }
}
</script>

<style>

</style>