<template>
  <div class="q-pa-md">
    <div class="text-h4 q-mb-md">Listando Administradores</div>
    <q-table
      :grid="$q.screen.xs"
      dense
      title="Administradores"
      :rows="rows"
      :columns="columns"
      row-key="id"
      :filter="filter"
      no-data-label="Nenhum Administrador Encontrado"
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
            @click="deleteRow(props)" i
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
        color="primary" 
        label="Cadastrar Administrador"
        @click="$router.push({ name: 'admin.auxiliares' })"
        />
      </template>
    </q-table>

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
                    <q-item-label class="q-pb-xs">Nascimento</q-item-label>
                    <date-input dense outlined disable :value="new Date(selectedRow.dataNascimento)"></date-input>
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
import DateInput from '../../components/DateInput.vue'
import Administrador from '../../model/Administrador'

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
        "date-input": DateInput
    },

    data() {
        return {
            rows: [],
            selectedRow: new Administrador(),
            show_dialog: false,
            show_delete: false
        }
    },
    methods: {
        viewRow(props) {
            console.log(props.row);
            this.selectedRow = props.row;
            this.show_dialog = true;
            console.log(this.selectedRow);
        },
        editRow(props) {
            console.log(`EDITANDO ${JSON.stringify(props.row)}`);
        },
        deleteRow(props) {
            console.log(`EXCLUINDO ${JSON.stringify(props.row)}`);
            this.selectedRow = props.row;
            this.show_delete = true;
        },
        updateRow() {

        },
        getRows() {
            loading.value = true;
            this.$api.get('admin')
            .then(res => {
                this.rows = res.data.administradores.map(adm => {
                        return Object.keys(adm).reduce((obj, key) => {
                            const value = adm[key]; // ler o valor
                            if (key === 'idUsuario') key = 'id'; // mudar o nome da chave
                            obj[key] = value;
                            return obj;
                        }, {}); 
                    }
                )
            }, err => console.log(err));
            loading.value = false;
        },
        async handleDelete(row) {
            await this.$api.delete(`admin/${row.id}`);
            this.getRows();
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
        this.getRows();
    }
}
</script>

<style>

</style>