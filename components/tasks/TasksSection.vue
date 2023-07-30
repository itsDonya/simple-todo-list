<template>
  <section class="w-full max-h-full flex flex-col justify-start gap-2">
    <task-blank v-if="$store.state.newTaskOpen"></task-blank>
    <task-item v-for="task in tasks" :key="task.id" :status="task.status">{{
      task.title
    }}</task-item>
  </section>
</template>

<script>
export default {
  name: "TasksSection",
};
</script>

<script setup>
import { useStore } from "@nuxtjs/composition-api";

// variables
const store = useStore();
const tasks = store.getters.allTasks;
</script>
