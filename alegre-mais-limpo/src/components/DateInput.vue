<template>
<div>
    <q-input
        :filled="filled"
        :label="label"
        :dense="dense"
        :outlined="outlined"
        :disable="disable"
        :model-value="val"
        @update:modelValue="$emit('update:modelValue', $event);" 
    >
        <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy ref="qDateProxy" cover transition-show="scale" transition-hide="scale">
                <q-date :model-value="val" @update:modelValue="setDate" mask="DD/MM/YYYY">
                <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                </div>
                </q-date>
            </q-popup-proxy>
            </q-icon>
        </template>
    </q-input>
</div>
</template>

<script>
export default {
    name: 'DateInput',
    props: {
        modelValue: {
            type: String,
            default: ''
        },
        filled: {
            type: Boolean,
            default: false
        },
        label: {
            type: String,
            default: ''
        },
        dense: {
            type: Boolean,
            default: false
        },
        outlined: {
            type: Boolean,
            default: false
        },
        disable: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        val: {
            get: function() {
                return new Date(this.modelValue).toLocaleDateString()
            },
            set: function(newValue) {
                let aux = newValue.split('/');
    
                this.$emit('update:modelValue', new Date(
                    parseInt(aux[2]),
                    parseInt(aux[1])-1,
                    parseInt(aux[0])
                ).toISOString());
            }
        }
    },
    methods: {
        setDate(date) {
            this.val = date;
        }
    }
}
</script>

<style>

</style>