<template>
  <a
    v-bind="link.attrs"
    class="p-2 flex items-center justify-center bg-purple-600/40 hover:bg-white/20 rounded-lg transition-all cursor-pointer"
  >
    <base-icon :name="link.icon" class="w-4 h-4 fill-purple-800"></base-icon>
  </a>
</template>

<script>
export default {
  name: "SidebarExternalLink",
};
</script>

<script setup>
const props = defineProps({
  link: {
    type: Object,
    required: true,
    default: function () {
      return {};
    },
  },
});
</script>
