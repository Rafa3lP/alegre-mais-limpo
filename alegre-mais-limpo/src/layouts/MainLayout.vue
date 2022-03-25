<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Alegre Mais Limpo </q-toolbar-title>
        <q-btn stretch flat to="/login" v-if="!isAuthenticated">Login</q-btn>
        <q-btn stretch flat @click="logout" v-else icon="logout" title="Sair"></q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header><b>Menu</b></q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: []
    }
  },

  methods: {
    setLinks() {
      switch(this.getNivelDeAcesso) {
        //adm
        case 1:
          this.essentialLinks = [ 
            {
              title: "Administradores",
              icon: "account_circle",
              to: "admin.administradores",
            },
            {
              title: "Auxiliares",
              icon: "group",
              to: "admin.auxiliares",
            },
            {
              title: "Motoristas",
              icon: "contact_mail",
              to: "admin.motoristas",
            },
            {
              title: "Caminhões",
              icon: "local_shipping",
              to: "admin.caminhoes",
            },
            {
              title: "Manutenção",
              icon: "engineering",
              to: "admin.manutencoes",
            },
            {
              title: "Abastecimento",
              icon: "ev_station",
              to: "admin.abastecimentos",
            },
            {
              title: "Zonas",
              icon: "apartment",
              to: "admin.zonas",
            },
            {
              title: "Ruas",
              icon: "maps_home_work",
              to: "admin.ruas",
            }
          ]
          break;
        //aux
        case 2:
          break;
        //mot
        case 3:
          break;
      }
    },
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },
    logout() {
      this.$store.dispatch('auth/signOut');
      this.$router.push({name: 'login'});
    }
  },
  computed: {
    ...mapGetters('auth', ['isAuthenticated', 'getNivelDeAcesso', 'getUser'])
  },
  created() {
    this.setLinks();
  }
});
</script>

<style>
  .q-list{
    padding: 10%;
    padding-top: 5%;
  }
</style>