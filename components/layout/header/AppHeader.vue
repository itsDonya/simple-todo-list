<template>
  <header class="w-full flex items-center justify-between">
    <button
      @click="newTask"
      class="px-4 py-2 text-sm text-purple-800 bg-white/80 rounded-lg hover:shadow-lg transition-all"
    >
      {{ $store.state.newTaskOpen ? "Close" : "New Task" }}
    </button>

    <div class="flex-items-center gap-2">
      <button
        @click="removeAll"
        class="px-4 py-2 text-sm text-purple-800/80 rounded-lg hover:bg-purple-800/10 transition-all"
      >
        Remove all
      </button>
      <button
        @click="checkAll"
        class="px-4 py-2 text-sm text-purple-800/80 border-2 border-purple-800/80 rounded-lg hover:bg-purple-800/10 transition-all"
      >
        Check All
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<script setup>
import { useStore } from "@nuxtjs/composition-api";

// variables
const store = useStore();

// methods
const newTask = () => {
  store.dispatch("toggleNewTask");
};
const checkAll = () => {
  // script here
};
const removeAll = () => {
  store.dispatch("removeAllTasks");
};
</script>
