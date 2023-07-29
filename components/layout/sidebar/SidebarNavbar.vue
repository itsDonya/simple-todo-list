<template>
  <nav class="w-full flex flex-col justify-start gap-2">
    <!-- aside links -->
    <nuxt-link
      v-for="(link, i) in links"
      :key="i"
      :to="link.to"
      class="px-3 py-2 hover:bg-purple-800/20 text-purple-200 rounded-lg transition-all"
      >{{ link.title }}</nuxt-link
    >
  </nav>
</template>

<script>
export default {
  name: "SidebarNavbar",
};
</script>

<script setup>
import { ref } from "@nuxtjs/composition-api";

// variables
const links = ref([
  {
    title: "All",
    to: {
      name: "tasks",
    },
  },
  {
    title: "Completed",
    to: {
      query: { status: "completed" },
    },
  },
  {
    title: "Uncompleted",
    to: {
      query: { status: "uncompleted" },
    },
  },
  {
    title: "Trash",
    to: {
      query: { status: "deleted" },
    },
  },
]);
</script>

<style scoped>
.nuxt-link-exact-active {
  background-color: #5b075b49;
}
</style>
