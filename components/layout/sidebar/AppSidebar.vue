<template>
  <aside
    class="w-44 p-2 h-screen text-purple-950 bg-white/40 rounded-tr-lg rounded-br-lg flex flex-col items-center justify-between gap-4"
  >
    <!-- title -->
    <sidebar-title></sidebar-title>

    <!-- menu -->
    <sidebar-navbar></sidebar-navbar>

    <!-- clear data -->
    <button
      class="w-full py-2 bg-purple-800/40 hover:bg-purple-800/60 rounded-lg transition-all"
    >
      Clear All Data
    </button>
  </aside>
</template>

<script>
export default {
  name: "AppSidebar",
};
</script>
