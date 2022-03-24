<template>
  <div class="q-pa-md">
    <div class="text-h4 q-pa-md row justify-center text-primary">
      Manutenções
    </div>
    <q-table
      :grid="$q.screen.xs"
      dense
      title="Manutenções"
      :rows="rows"
      :columns="columns"
      row-key="id"
      :filter="filter"
      no-data-label="Nenhuma Manutenção Encontrado"
      no-results-label="O filtro não obteve nenhum resultado"
      :loading="loading"
      :pagination="initialPagination"
    >
    <!-- BOTOES DE AÇÃO -->
    <template v-slot:body-cell-actions="props">
        <q-td :props="props">
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
            label="Cadastrar Manutenção"
            @click="$router.push({ name: 'admin.nova.manutencao' })"
        />
      </template>
    </q-table>

    <!-- DIALOG DE VISUALIZAR USUARIO -->
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
                  <q-item-label class="q-pb-xs">Data</q-item-label>
                  <date-input
                    dense
                    outlined 
                    v-model="selectedRow.data"
                    lazy-rules
                    disable
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
                  <q-item-label class="q-pb-xs">Descrição</q-item-label>
                  <q-input dense outlined disable v-model="selectedRow.descricao" />
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label class="q-pb-xs">Valor</q-item-label>
                  <q-input 
                  dense 
                  outlined
                  disable
                  :model-value="parseFloat(selectedRow.valor).toFixed(2)"
                  fill-mask="0" 
                  reverse-fill-mask
                  mask="#.##" 
                  prefix="R$ "
                  />
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
import Manutencao from '../../../model/Manutencao'
import DateInput from '../../../components/DateInput.vue'

const columns = [
    {
        name: 'placa',
        required: true,
        label: 'Placa',
        align: 'left',
        field: 'placa',
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
    components: {
      DateInput
    },
    data() {
        return {
          rows: [],
          selectedRow: new Manutencao(),
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
            name: 'admin.editar.manutencao', 
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
          // faz um request na api para obter todas as manutencoes
          loading.value = true;
          this.$api.get('manutencao')
          .then(res => {
            this.rows = res.data.manutencoes;
          }, err => console.log(err));
          loading.value = false;
      },
      async handleDelete(row) {
        // deleta o usuario do banco
        try {
          await this.$api.delete(`manutencao/${row.id}`);
          this.$q.notify({
            type: "positive",
            message: "Manutenção Excluida!"
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