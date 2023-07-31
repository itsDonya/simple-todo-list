<template>
  <div
    @click.self="checkTask"
    :class="[taskStyle]"
    class="w-full p-4 flex items-center justify-between rounded-lg transition-all cursor-pointer select-none"
  >
    <label class="w-full flex items-center justify-start gap-2 cursor-pointer">
      <input
        type="checkbox"
        ref="taskCheckbox"
        @change="checkTask"
        class="w-3.5 h-3.5 appearance-none bg-white/60 rounded-sm checked:bg-purple-900 cursor-pointer"
      />
      <span :class="[taskTitleStyle]" class="checked:hidden">
        {{ task.title }}
      </span>
    </label>

    <div class="flex items-center gap-2">
      <!-- archive task -->
      <base-icon
        @click="archiveTask"
        name="box-archive-solid"
        v-if="props.task.status !== 'archive'"
        class="w-5 h-5 fill-purple-950 hover:fill-purple-900 cursor-pointer transition-all"
      ></base-icon>
      <base-icon
        v-else
        @click="restoreTask"
        name="rotate-left-solid"
        class="w-5 h-5 fill-purple-950 hover:fill-purple-900 cursor-pointer transition-all"
      ></base-icon>
      <!-- remove task -->
      <base-icon
        @click="removeTask"
        name="trash-can-regular"
        class="w-5 h-5 fill-purple-950 hover:fill-purple-900 cursor-pointer transition-all"
      ></base-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskItem",
};
</script>

<script setup>
import {
  ref,
  computed,
  useStore,
  onMounted,
  watch,
} from "@nuxtjs/composition-api";

// variables
const store = useStore();
const taskCheckbox = ref(null);

// props
const props = defineProps({
  task: {
    type: Object,
    required: true,
    default: function () {
      return {};
    },
  },
});

// methods
const checkTask = () => {
  store.dispatch("toggleStatus", props.task.id);
};
const removeTask = () => {
  store.dispatch("removeTask", props.task.id);
};
const archiveTask = () => {
  store.dispatch("archiveTask", props.task.id);
};
const restoreTask = () => {
  store.dispatch("restoreTask", props.task.id);
};

// computed
const taskStyle = computed(() => {
  if (props.task.status === "completed") {
    return "bg-purple-900/10 hover:bg-purple-900/20";
  } else {
    return "bg-purple-900/20 hover:bg-purple-900/30";
  }
});
const taskTitleStyle = computed(() => {
  if (props.task.status === "completed") {
    return "text-purple-900 line-through";
  } else {
    return "text-purple-950";
  }
});

// lifecycles
onMounted(() => {
  // check & fill/blank checbox based on first-loaded status
  taskCheckbox.value.checked = props.task.status === "completed";
});

// watchers
watch(
  () => props.task.status,
  (newVal) => {
    // checkbox fill/blacnk based on props changes
    taskCheckbox.value.checked = newVal === "completed";
  }
);
</script>
