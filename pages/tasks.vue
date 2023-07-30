<template>
  <tasks-section></tasks-section>
</template>

<script>
export default {
  name: "Tasks",
};
</script>

<script setup>
import { useStore } from "@nuxtjs/composition-api";

// variables
const store = useStore();
store.dispatch("getFromLocalStorage");
</script>
