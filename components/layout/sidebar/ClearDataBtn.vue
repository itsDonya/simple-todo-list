<template>
  <button
    @click="clearData"
    class="w-full py-2 text-purple-800 bg-purple-600/40 hover:bg-white/20 rounded-lg transition-all"
  >
    Clear All Data
  </button>
</template>

<script>
export default {
  name: "ClearDataButton",
};
</script>

<script setup>
import { useStore } from "@nuxtjs/composition-api";

// variables
const store = useStore();

// methods
const clearData = () => {
  store.dispatch("clearData");
};
</script>
