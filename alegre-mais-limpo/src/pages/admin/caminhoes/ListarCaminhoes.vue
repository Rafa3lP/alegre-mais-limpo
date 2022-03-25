<template>
  <div class="q-pa-md">
    <div class="text-h4 q-pa-md row justify-center text-primary">
      Caminhões
    </div>
    <q-table
      :grid="$q.screen.xs"
      dense
      title="Caminhões"
      :rows="rows"
      :columns="columns"
      row-key="id"
      :filter="filter"
      no-data-label="Nenhum Caminhão Encontrado"
      no-results-label="O filtro não obteve nenhum resultado"
      :loading="loading"
      :pagination="initialPagination"
    >

    <!-- BADGES E BOTOES DE AÇÃO -->
    <template v-slot:body="props">
      <q-tr :props="props">
        <q-td key="placa" :props="props">
            {{ props.row.placa }}
        </q-td>
        <q-td key="situacao" :props="props">
          <q-badge v-if="props.row.situacao == '1'" color="green">
            Disponível
          </q-badge>
          <q-badge v-else color="red">
            Indisponível
          </q-badge>
        </q-td>
        <q-td key="actions" :props="props">
          <q-btn 
          class="q-mr-md" 
          dense 
          round 
          flat 
          color="grey" 
          @click="viewRow(props)" 
          icon="visibility"
          >
          </q-btn>
          <q-btn 
          class="q-mr-md" 
          dense 
          round 
          flat 
          color="grey" 
          @click="editRow(props)" 
          icon="edit"
          >
          </q-btn>
          <q-btn 
          dense 
          round 
          flat 
          color="negative" 
          @click="deleteRow(props)"
          icon="delete"
          >
          </q-btn>
        </q-td>   
      </q-tr>
    </template>
    
    <!-- BARRA DE PESQUISA E BOTÃO DE CADASTRAR -->
    <template v-slot:top>
        <q-input outlined dense debounce="200" color="primary" v-model="filter" placeholder="Pesquisar">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
        <q-space />
        <q-btn
            class="q-ma-md" 
            color="primary" 
            label="Cadastrar Caminhao"
            @click="$router.push({ name: 'admin.novo.caminhao' })"
        />
      </template>
    </q-table>

    <!-- DIALOG DE VISUALIZAR CAMINHÕES -->
    <q-dialog v-model="show_dialog">
      <q-card style="width: 600px; max-width: 60vw;">
        <q-card-section class="row items-center justify-between q-pb-sm no-wrap">
            <div class="text-h6 text-primary ellipsis">
                Visualizar
            </div>
            <q-btn dense flat icon="close" v-close-popup>
                <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
            </q-btn>
        </q-card-section>

        <q-separator />

        <q-card-section class="scroll" style="max-height: 50vh;">
          <q-form class="q-gutter-md col-sm-6 col-xs-12">
              <q-item >
                <q-item-section>
                  <q-checkbox
                    name="situacao"
                    v-model="selectedRow.situacao"
                    true-value="1"
                    false-value="0"
                    disable
                    dense
                    label="Disponível"
                  />
                </q-item-section>
              </q-item>
              
              <q-item>
                <q-item-section>
                  <q-item-label class="q-pb-xs">Placa</q-item-label>
                  <q-input dense outlined disable v-model="selectedRow.placa" mask = "XXX-XXXX" />
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label class="q-pb-xs">Modelo</q-item-label>
                  <q-input dense outlined disable v-model="selectedRow.modelo" />
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label class="q-pb-xs">Ano</q-item-label>
                  <q-input dense outlined disable v-model="selectedRow.ano" />
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label class="q-pb-xs">Marca</q-item-label>
                  <q-input dense outlined disable v-model="selectedRow.marca" />
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label class="q-pb-xs">Quilometragem</q-item-label>
                  <q-input dense outlined disable v-model="selectedRow.quilometragem" />
                </q-item-section>
              </q-item>
          </q-form>
        </q-card-section>
          <q-card-actions align="right" class="q-ma-sm">
            <q-btn
              label="OK"
              color="primary"
              v-close-popup
            ></q-btn>
          </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- CONFIRMAÇÃO PARA DELETAR -->
    <q-dialog v-model="show_delete" persistent>
      <q-card>
        <q-card-section class="row items-center">
            <q-avatar icon="delete_outline" color="primary" text-color="white" />
            <span class="q-ml-sm">Tem certeza que deseja excluir?</span>
        </q-card-section>

        <q-card-actions align="right">
            <q-btn flat label="Cancelar" color="primary" v-close-popup />
            <q-btn flat label="Excluir" color="negative" v-close-popup @click="handleDelete(selectedRow)" />
        </q-card-actions>
      </q-card>
    </q-dialog>

  </div>
</template>

<script>
import { ref } from 'vue'
import Caminhao from '../../../model/Caminhao'

const columns = [
    {
        name: 'placa',
        required: true,
        label: 'Placa',
        align: 'left',
        field: 'placa',
    },
    {
        name: 'situacao',
        label: 'Situação',
        align: 'center',
        field: 'situacao',
    },
    { 
        name: 'actions', 
        label: 'Ações', 
        field: '', 
        align:'center' 
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
          selectedRow: new Caminhao(),
          show_dialog: false,
          show_delete: false
        }
    },
    methods: {
      viewRow(props) {
        // chamar dialog de visualização
        this.selectedRow = props.row;
        this.show_dialog = true;
      },
      editRow(props) {
        // chamar tela de edição
        this.$router.push({ 
            name: 'admin.editar.caminhao', 
            params: { 
              id: props.row.id 
            } 
          }
        )
      },
      deleteRow(props) {
        // chamar dialog de consirmação
        this.selectedRow = props.row;
        this.show_delete = true;
      },
      getRows() {
          // faz um request na api para obter todos os administradores
          loading.value = true;
          this.$api.get('caminhao')
          .then(res => {
            this.rows = res.data.caminhoes;
          }, err => console.log(err));
          loading.value = false;
      },
      async handleDelete(row) {
        // deleta o caminhão do banco
        try {
          await this.$api.delete(`caminhao/${row.id}`);
          this.$q.notify({
            type: "positive",
            message: "Caminhão Excluido!"
          })
          this.getRows();
        } catch(err) {
          this.$q.notify({
            type: "negative",
            message: err.response.data.message || err.message
          })
        }
          
      }

    },
    setup() {
      return {
        initialPagination,
        filter,
        columns,
        loading
      }
    },
    created() {
      this.getRows();
    }
}
</script>

<style>

</style>