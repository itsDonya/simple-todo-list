<template>
  <aside
    class="w-44 p-2 h-screen text-purple-950 bg-white/40 rounded-tr-lg rounded-br-lg flex flex-col items-center justify-between gap-4"
  >
    <!-- title -->
    <sidebar-title></sidebar-title>

    <!-- menu -->
    <sidebar-navbar></sidebar-navbar>

    <!-- bottom buttons -->
    <div class="w-full flex flex-col gap-2">
      <!-- clear data -->
      <clear-data-btn></clear-data-btn>

      <sidebar-external-links></sidebar-external-links>
    </div>
  </aside>
</template>

<script>
export default {
  name: "AppSidebar",
};
</script>
