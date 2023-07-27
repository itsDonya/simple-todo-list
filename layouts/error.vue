<template>
  <main class="min-h-screen flex flex-col items-center justify-center gap-2">
    <h1 class="text-5xl font-bold text-purple-900">Page Not Found!</h1>
    <nuxt-link
      to="/"
      class="text-purple-900 border-0 hover:border-b-[1px] border-b-purple-900 transition-all"
      >Back to Home Page</nuxt-link
    >
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
</style>
