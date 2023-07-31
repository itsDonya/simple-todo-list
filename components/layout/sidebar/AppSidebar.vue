<template>
  <aside
    :class="[sidebarStyle]"
    class="absolute h-screen text-purple-950 bg-white/70 rounded-tr-lg rounded-br-lg flex flex-col items-center justify-between gap-4 transition-all duration-300"
  >
    <!-- title -->
    <sidebar-title></sidebar-title>

    <!-- menu -->
    <sidebar-navbar></sidebar-navbar>

    <!-- bottom buttons -->
    <div class="w-full flex flex-col gap-2">
      <!-- clear data -->
      <clear-data-btn></clear-data-btn>

      <!-- external links -->
      <sidebar-external-links></sidebar-external-links>
    </div>
  </aside>
</template>

<script>
export default {
  name: "AppSidebar",
};
</script>

<script setup>
import { computed } from "@nuxtjs/composition-api";

// props
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
    default: false,
  },
});

// computed
const sidebarStyle = computed(() => {
  // change sidebar style based on is it opened or not
  if (props.isOpen) {
    return "w-44 p-2";
  } else {
    return "w-0 p-0 overflow-hidden";
  }
});
</script>
