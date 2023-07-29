<template>
  <nav class="w-full flex flex-col justify-start gap-2">
    <!-- aside links -->
    <nuxt-link
      v-for="(link, i) in links"
      :key="i"
      :to="link.to"
      class="px-3 py-2 hover:bg-purple-800/20 rounded-lg transition-all"
    >
      <div class="flex items-center justify-start gap-3">
        <base-icon
          :name="link.icon"
          class="w-4 h-4 fill-purple-900"
        ></base-icon>
        <span class="text-purple-900">{{ link.title }}</span>
      </div>
    </nuxt-link>
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
    icon: "list-solid",
    to: {
      name: "tasks",
    },
  },
  {
    title: "Completed",
    icon: "check-solid",
    to: {
      query: { status: "completed" },
    },
  },
  {
    title: "Uncompleted",
    icon: "clock-regular",
    to: {
      query: { status: "uncompleted" },
    },
  },
  {
    title: "Trash",
    icon: "trash-can-regular",
    to: {
      query: { status: "deleted" },
    },
  },
]);
</script>

<style scoped>
.nuxt-link-exact-active {
  background-color: #6b21a84d;
}
</style>
