<template>
  <a
    v-bind="link.attrs"
    class="py-2 flex-1 flex items-center justify-center bg-fuchsia-600/40 hover:bg-white/20 rounded-lg transition-all cursor-pointer"
  >
    <base-icon :name="link.icon" class="w-4 h-4 fill-fuchsia-900"></base-icon>
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
