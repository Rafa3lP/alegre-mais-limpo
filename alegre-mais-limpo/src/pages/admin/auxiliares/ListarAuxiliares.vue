<template>
  <div class="q-pa-md">
    <div class="text-h4 q-pa-md row justify-center text-primary">
      Auxiliares
    </div>
    <q-table
      :grid="$q.screen.xs"
      dense
      title="Auxiliares"
      :rows="rows"
      :columns="columns"
      row-key="id"
      :filter="filter"
      no-data-label="Nenhum Auxiliar Encontrado"
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
            label="Cadastrar Auxiliar"
            @click="$router.push({ name: 'admin.novo.auxiliar' })"
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
                  <q-item-label class="q-pb-xs">Nome</q-item-label>
                  <q-input dense outlined disable v-model="selectedRow.nome" />
                </q-item-section>
              </q-item>
              <q-item >
                <q-item-section>
                  <q-checkbox
                    name="servicoComunitario"
                    v-model="selectedRow.servicoComunitario"
                    :true-value="1"
                    :false-value="0"
                    disable
                    dense
                    label="Serviço Comunitário"
                  />
                </q-item-section>
              </q-item>
              <q-item >
                <q-item-section>
                    <q-item-label class="q-pb-xs">Nascimento</q-item-label>
                    <date-input
                      dense
                      outlined
                      disable 
                      v-model="selectedRow.dataNascimento"
                      lazy-rules
                    />
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label class="q-pb-xs">CPF</q-item-label>
                  <q-input dense outlined disable v-model="selectedRow.cpf" mask = "###.###.###-##" />
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label class="q-pb-xs">Usuario</q-item-label>
                  <q-input dense outlined disable v-model="selectedRow.usuario" />
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label class="q-pb-xs">Bairro</q-item-label>
                  <q-input dense outlined disable v-model="selectedRow.bairro" />
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label class="q-pb-xs">Logradouro</q-item-label>
                  <q-input dense outlined disable v-model="selectedRow.nome" />
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label class="q-pb-xs">CEP</q-item-label>
                  <q-input dense outlined disable v-model="selectedRow.cep" mask = "#####-###" />
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label class="q-pb-xs">Numero</q-item-label>
                  <q-input dense outlined disable v-model="selectedRow.numero" />
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label class="q-pb-xs">Complemento</q-item-label>
                  <q-input dense outlined disable v-model="selectedRow.complemento" />
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label class="q-pb-xs">Cidade</q-item-label>
                  <q-input dense outlined disable v-model="selectedRow.cidade" />
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label class="q-pb-xs">UF</q-item-label>
                  <q-input dense outlined disable v-model="selectedRow.uf" />
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
import DateInput from '../../../components/DateInput.vue'
import Auxiliar from '../../../model/Auxiliar'

const columns = [
    {
        name: 'nome',
        required: true,
        label: 'Nome',
        align: 'left',
        field: 'nome',
        sortable: true
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
          selectedRow: new Auxiliar(),
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
            name: 'admin.editar.auxiliar', 
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
          this.$api.get('auxiliar')
          .then(res => {
            this.rows = res.data.auxiliares;
          }, err => console.log(err));
          loading.value = false;
      },
      async handleDelete(row) {
        // deleta o usuario do banco
        try {
          await this.$api.delete(`auxiliar/${row.id}`);
          this.$q.notify({
            type: "positive",
            message: "Usuario Excluido!"
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