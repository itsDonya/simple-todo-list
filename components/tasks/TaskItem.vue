<template>
  <div
    @click.self="checkTask"
    :class="[taskStyle]"
    class="w-full p-4 flex items-center justify-between rounded-lg transition-all cursor-pointer"
  >
    <label class="w-full flex items-center justify-start gap-2 cursor-pointer">
      <input
        type="checkbox"
        ref="taskCheckbox"
        @change="checkTask"
        class="w-3.5 h-3.5 appearance-none bg-white/60 rounded-sm checked:bg-purple-900 focus:outline-none cursor-pointer"
      />
      <span :class="[taskTitleStyle]" class="checked:hidden">
        <slot></slot>
      </span>
    </label>

    <div class="flex items-center gap-2">
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
import { ref, computed } from "@nuxtjs/composition-api";

// variables
const isCheck = ref(false);
const taskCheckbox = ref(null);

// methods
const checkTask = () => {
  // script here
  isCheck.value = !isCheck.value;
  taskCheckbox.value.checked = isCheck.value;
};
const removeTask = () => {
  // script here
};

// computed
const taskStyle = computed(() => {
  if (isCheck.value) {
    return "bg-purple-900/10 hover:bg-purple-900/20";
  } else {
    return "bg-purple-900/20 hover:bg-purple-900/30";
  }
});
const taskTitleStyle = computed(() => {
  if (isCheck.value) {
    return "text-purple-900 line-through";
  } else {
    return "text-purple-950";
  }
});
</script>
