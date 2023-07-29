<template>
  <main class="min-h-screen flex items-start">
    <app-sidebar></app-sidebar>
    <div class="p-4 w-full">
      <app-header></app-header>
      <nuxt />
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
