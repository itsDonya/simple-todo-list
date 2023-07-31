<template>
  <div class="flex items-center justify-between gap-1">
    <sidebar-external-link
      v-for="(link, i) in links"
      :key="i"
      :link="link"
    ></sidebar-external-link>
  </div>
</template>

<script>
export default {
  name: "SidebarExternalLinks",
};
</script>

<script setup>
import { ref } from "@nuxtjs/composition-api";

// variables
const links = ref([
  {
    icon: "github",
    attrs: {
      title: "See on Github",
      href: "https://github.com/itsDonya/todo-list",
    },
  },
  {
    icon: "bug-solid",
    attrs: {
      title: "Bug report",
      href: "https://github.com/itsDonya/todo-list/issues",
    },
  },
  {
    icon: "envelope-solid",
    attrs: {
      title: "Contact via Gmail",
      href: "mailto: thisis2nya@gmail.com",
    },
  },
  {
    icon: "telegram",
    attrs: {
      title: "Contact via Telegram",
      href: "https://t.me/lil_2nya",
    },
  },
]);
</script>
