<template>
    <q-input v-bind="$attrs" v-model="computedDate" mask="##/##/####">
        <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy ref="qDateProxy" cover transition-show="scale" transition-hide="scale">
                <q-date v-model="computedDate" mask="DD/MM/YYYY">
                <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                </div>
                </q-date>
            </q-popup-proxy>
            </q-icon>
        </template>
    </q-input>
</template>

<script>
import { date } from 'quasar'

export default {
    props: {
        value: {
            required: true,
            type: Date
        }, 
    },
    data() {
        return {
            val: this.$props.value.getTime()
        }
    },
    computed: {
        computedDate: {
            get () {
                return date.formatDate(this.val, 'DD/MM/YYYY')
            },
            set (value) {
                const correct_date = date.extractDate(value, 'DD/MM/YYYY');  
                this.val = correct_date.getTime();
            }
        }
    },
}
</script>

<style>

</style>