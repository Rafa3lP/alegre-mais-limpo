<template>
  <h3>Protected route</h3>
  <h6>Olá {{ getUser.nome }}</h6>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {

        }
    },
    computed: {
        ...mapGetters('auth', ['getUser'])
    }
}
</script>

<style>

</style>