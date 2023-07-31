<template>
  <!-- tasks' showplace -->
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

// get stored data from localStorage on first load
store.dispatch("getFromLocalStorage");
</script>
