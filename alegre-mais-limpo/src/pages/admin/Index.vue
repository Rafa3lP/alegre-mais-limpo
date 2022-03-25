<template>
    <div class="q-pa-md">
        <div class="col-6">
            <q-img src="~assets/logo.png">
                <div class="absolute-full text-subtitle2 flex flex-center">
                    <h6>BEM-VINDO {{ getUser.nome }}</h6>
                </div>
            </q-img>
        </div>
    </div> 
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
    .q-img{
        position: relative;
        width: 100%; 
        height: 0; 
        padding-top: 56.2500%;
        padding-bottom: 48px; 
        box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); 
        margin-top: 1.6em; 
        margin-bottom: 0.9em; 
        overflow: hidden;
        border-radius: 8px; 
        will-change: transform;
    }
</style>