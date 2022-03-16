<template>
<img src="~assets/background-login.jpg" class="fundo">
    <div class="flex justify-center content-center" style="height: 98vh;">
        <q-card :style="$q.screen.lt.sm ? {'width': '80%'} : {'width': '50%'}" style="max-width: 400px">
            <q-card-section>
                <div class="">
                    <div class="col text-h4 ellipsis flex justify-center">
                        <div class="text-weight-regular">Fazer Login</div>
                    </div>
                </div>
            </q-card-section>
            <q-card-section>
                <q-form class="q-gutter-md" @submit.prevent="login">
                    <q-input
                    filled
                    type="text" 
                    v-model="usuario" 
                    label="Usuario" 
                    >
                    </q-input>
                    <q-input v-model="senha" filled :type="isPwd ? 'password' : 'text'" label="Senha">
                        <template v-slot:append>
                        <q-icon
                            :name="isPwd ? 'visibility_off' : 'visibility'"
                            class="cursor-pointer"
                            @click="isPwd = !isPwd"
                        />
                        </template>
                    </q-input>
                    <q-card-actions align="right">
                        <q-btn
                            flat
                            align="right"
                            size="lg"
                            label="Entrar"
                            type="submit"
                            color="primary"
                            icon="login"
                        />
                    </q-card-actions>
                </q-form>
            </q-card-section>
        </q-card>
    </div>
</template>

<script>
import { useQuasar } from 'quasar';
import { mapActions, mapGetters } from 'vuex';
export default {
    data() {
        return {
            usuario: '',
            senha: '',
            isPwd: true,
        }
    },
    methods: {
        ...mapActions('auth', ['doLogin']),
        ...mapGetters('auth', ['getNivelDeAcesso']),
        async login() {
            const login = {
                usuario: this.usuario, 
                senha: this.senha
            }

            try {
                const res = await this.doLogin(login);
                this.$q.notify({
                    type: "positive",
                    message: "Logado com sucesso!"
                });

                let routeName = '';
                
                switch(this.getNivelDeAcesso()) {
                    case 1:
                        routeName = 'admin';
                        break;
                    case 2:
                        routeName = 'auxiliar';
                        break;
                    case 3:
                        routeName = 'motorista';
                        break;
                    default:
                        routeName = '';
                        break;
                }
                if(this.$route.query.to) {
                    this.$router.push(this.$route.query.to);    
                } else {
                    this.$router.push({name: routeName});
                }
            } catch (error) {
                if(error.response) {
                    this.$q.notify({
                        type: "negative",
                        message: error.response.data.message
                    });
                }
                
            }
            
        }
    }
}
</script>

<style scoped>
.fundo {
    position: fixed;
    height: 100%;
    width: 100%;
    bottom: 0;
    z-index: -1;
}
</style>