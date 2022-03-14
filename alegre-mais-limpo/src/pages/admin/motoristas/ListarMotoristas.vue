<template>
  <div class="q-pa-md">
    <h2>Listando Motoristas</h2>
    
    <q-table
      :grid="$q.screen.xs"
      title="Motoristas"
      :rows="rows"
      :columns="columns"
      row-key="idMotorista"
      :filter="filter"
      no-data-label="Nenhum Motorista Encontrado"
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
        name: 'idMotorista',
        required: true,
        label: 'Id',
        field: 'idMotorista',
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
        name: 'numCarteira',
        required: true,
        label: 'Carteira',
        align: 'left',
        field: 'numCarteira',
        sortable: true
    }
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
        this.$api.get('motorista')
        .then(res => {
            this.rows = res.data.motoristas
        }, err => console.log(err));
        loading.value = false;
    }
}
</script>

<style>

</style>