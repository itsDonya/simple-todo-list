<template>
  <section class="w-full h-screen px-4 flex flex-col justify-start gap-2">
    <!-- the blank task wrapper where you can write task name inside it -->
    <task-blank v-if="$store.state.newTaskOpen"></task-blank>

    <!-- the complete task item, able to be checked, unchecked, removed and archived -->
    <task-item v-for="task in tasks" :key="task.id" :task="task"></task-item>
  </section>
</template>

<script>
export default {
  name: "TasksSection",
};
</script>

<script setup>
import {
  ref,
  watch,
  useStore,
  useRoute,
  computed,
  onMounted,
} from "@nuxtjs/composition-api";

// variables
const query = ref({});
const route = useRoute();
const store = useStore();

// computed
const tasks = computed(() => {
  const status = query.value.status;
  if (status) {
    // return tasks based on current query name (such as completed, uncompleted and archived)
    return store.getters.allTasks(status);
  } else {
    // return all tasks (but archived)
    return store.getters.allTasks("");
  }
});

// lifecycles
onMounted(() => {
  // get status from query on first mount
  query.value = route.value.query;
});

// watchers
watch(
  // get status from query on every route change
  () => route.value.query,
  (newVal) => {
    query.value = newVal;
  }
);
</script>
