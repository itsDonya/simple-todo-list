<template>
  <main class="relative min-h-screen flex items-center">
    <!-- overlay -->
    <div
      v-if="isSidebarOpen"
      @click="toggleSidebar"
      class="absolute top-0 left-0 w-screen h-screen bg-black/60 z-10 cursor-pointer"
    ></div>
    <!-- sidebar -->
    <app-sidebar class="z-20" :isOpen="isSidebarOpen"></app-sidebar>
    <button
      v-if="!isSidebarOpen"
      @click="toggleSidebar"
      class="absolute left-1"
    >
      <base-icon
        class="w-8 h-8 p-2 bg-purple-800/40 hover:bg-purple-900/40 fill-purple-950/80 hover:shadow-lg rounded-full z-20 transition-all"
        name="chevron-right-solid"
      ></base-icon>
    </button>
    <div
      class="w-full max-w-lg md:max-w-3xl lg:max-w-5xl max-h-screen p-4 mx-auto overflow-auto"
    >
      <app-header></app-header>
      <hr class="my-3 h-[1px] bg-purple-900/40 border-none" />
      <nuxt class="mt-4" />
    </div>
  </main>
</template>

<script>
export default {
  name: "DefaultLayout",
};
</script>

<script setup>
import { ref } from "@nuxtjs/composition-api";

// variables
const isSidebarOpen = ref(true);

// functions
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};
</script>

<style scoped>
main {
  background: rgb(143, 12, 213);
  background: linear-gradient(90deg, #8f0cd5 0%, #d91dfd 50%, #ff38f7 100%);
}

* {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
</style>
