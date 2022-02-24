<template>
  <div class="q-pa-md">
    <h2>Listando Auxiliares</h2>
    
    <q-table
      :grid="$q.screen.xs"
      title="Auxiliares"
      :rows="rows"
      :columns="columns"
      row-key="idAuxiliar"
      :filter="filter"
      no-data-label="Nenhum Auxiliar Encontrado"
      no-results-label="O filtro não obteve nenhum resultado"
      :loading="loading"
      :pagination="initialPagination"
    >
    <template v-slot:top-right>
        <q-input borderless dense debounce="200" v-model="filter" placeholder="Pesquisar">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
    </template>
    </q-table>
  </div>
</template>

<script>
import { ref } from 'vue'

const columns = [
    {
        name: 'idAuxiliar',
        required: true,
        label: 'Id',
        field: 'idAuxiliar',
        align: 'left',
        sortable: true
    },
    {
        name: 'nome',
        required: true,
        label: 'Nome',
        align: 'left',
        field: 'nome',
        sortable: true
    },
    { 
        name: 'servicoComunitario', 
        align: 'center', 
        label: 'Serviço comunitário', 
        field: 'servicoComunitario',
        format: val => (val == 0) ? 'Não' : 'Sim',
        sortable: true 
    },
]

const initialPagination = {
    sortBy: 'desc',
    descending: false,
    rowsPerPage: 10,
}

const loading = ref(false);
const filter = ref('');

export default {

    data() {
        return {
            rows: [],
        }
    },
    setup () {
        return {
        initialPagination,
        filter,
        columns,
        loading
        }
    },
    created() {
        loading.value = true;
        this.$api.get('auxiliar')
        .then(res => {
            this.rows = res.data.auxiliares
        }, err => console.log(err));
        loading.value = false;
    }
}
</script>

<style>

</style>