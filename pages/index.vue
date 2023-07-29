<template>
  <h1>index</h1>
</template>

<script>
export default {
  name: "Landing",
  middleware({ redirect }) {
    redirect("/tasks");
  },
};
</script>
