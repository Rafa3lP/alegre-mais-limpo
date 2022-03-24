<template>
  <router-link style="text-decoration: none; color: inherit;" :to="{name: to}">
    <q-item clickable>
      <q-item-section v-if="icon" avatar>
        <q-icon :name="icon" />
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ title }}</q-item-label>
        <q-item-label caption>
          {{ caption }}
        </q-item-label>
      </q-item-section>
    </q-item>
  </router-link>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "EssentialLink",
  props: {
    title: {
      type: String,
      required: true,
    },

    caption: {
      type: String,
      default: "",
    },

    to: {
      type: String,
      default: "login",
    },

    icon: {
      type: String,
      default: "",
    },
  },
});
</script>
<style scoped>

</style>