<template>
  <div
    class="w-full px-4 py-3 flex items-center justify-between bg-purple-900/10 rounded-lg transition-all cursor-pointer gap-2"
  >
    <input
      type="text"
      ref="taskInput"
      v-model="title"
      class="text-purple-950 bg-transparent w-full h-8"
    />
    <base-icon
      @click="newTask"
      name="check-solid"
      class="w-4 h-4 fill-purple-900"
    ></base-icon>
  </div>
</template>

<script>
export default {
  name: "TaskBlank",
};
</script>

<script setup>
import { ref, onMounted, useStore, computed } from "@nuxtjs/composition-api";

// variables
const store = useStore();
const taskInput = ref(null);

// methods
const newTask = () => {
  store.dispatch("newTask");
  title.value = "";
};

// computed
const title = computed({
  get() {
    return store.state.newTaskTitle;
  },
  set(value) {
    // update new task title (in store) on every change
    store.dispatch("updateNewTaskTitle", value);
  },
});

// lifecycles
onMounted(() => {
  taskInput.value.focus();
});
</script>
