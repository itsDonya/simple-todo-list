<template>
  <main class="min-h-screen flex items-start">
    <app-sidebar></app-sidebar>
    <div class="w-full max-w-5xl max-h-screen p-4 mx-auto overflow-auto">
      <app-header></app-header>
      <hr class="my-3 h-[1px] bg-purple-900/40 border-none" />
      <nuxt class="mt-4" />
    </div>
  </main>
</template>

<style scoped>
main {
  background: rgb(143, 12, 213);
  background: linear-gradient(
    90deg,
    rgba(143, 12, 213, 1) 0%,
    rgba(217, 29, 253, 1) 50%,
    rgba(255, 56, 247, 1) 100%
  );
}

* {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
</style>
