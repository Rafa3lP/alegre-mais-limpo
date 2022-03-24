<template>
  <div class="q-pa-md">
    <div v-if="!editing" class="text-h4 q-pa-md row justify-center text-primary">
      Nova Zona
    </div>
    <div v-else class="text-h4 q-pa-md row justify-center text-primary">
      Editar Zona
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
            v-model="zona.nome"
            label="Nome da Zona"
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
import Zona from 'src/model/Zona'

export default {
  
  data() {
    return {
      zona: new Zona(),
      editing: false,
    }
  },
  methods: {
    async getZona() {
      try {
        const response = await this.$api.get(`zona/${this.zona.id}`);
        this.zona = response.data;
      } catch(err) {
        this.$q.notify({
          type: "negative",
          message: "Não foi possível obter a zona"
        })
        this.$router.push({
          name: 'admin.zonas'
        });
      }
    },
    async onSubmit() {
      try {
        if(this.editing) {
          // atualiza a zona existente
          await this.$api.put(`/zona/${this.zona.id}`, this.zona);
          this.$q.notify({
            type: "positive",
            message: "Atualizado com sucesso!"
          });
        } else {
          // cria nova noza
          await this.$api.post('/zona', this.zona);
          this.$q.notify({
            type: "positive",
            message: "Cadastrado com sucesso!"
          });
        }
        this.$router.push({
          name: 'admin.zonas'
        });
      }catch(err) {
        this.$q.notify({
          type: "negative",
          message: err.response.data.message || err.message
        })
      }

    },
    onReset() {
      this.zona = new Zona();
    },
  },
  created() {
    this.zona.id = this.$route.params.id;
    if(this.zona.id) {
      this.editing = true;
      this.getZona();
    }
  }
}
</script>

<style>

</style>