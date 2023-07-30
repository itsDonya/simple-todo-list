<template>
  <section class="w-full max-h-full flex flex-col justify-start gap-2">
    <task-blank v-if="$store.state.newTaskOpen"></task-blank>
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
    return store.getters.allTasks(status);
  } else {
    return store.getters.allTasks("");
  }
});

// lifecycles
onMounted(() => {
  query.value = route.value.query;
});

// watchers
watch(
  () => route.value.query,
  (newVal) => {
    query.value = newVal;
  }
);
</script>
