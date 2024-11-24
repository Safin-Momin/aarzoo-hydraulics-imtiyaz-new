<script lang="ts" setup>
const props = defineProps({
  open: {
    type: Boolean,
    required: true,
  },
})
</script>

<template>
  <svg
    aria-hidden="true"
    class="h-3.5 w-3.5 overflow-visible stroke-secondary"
    fill="none"
    stroke-width="2"
    stroke-linecap="round"
  >
    <path
      d="M0 1H14M0 7H14M0 13H14"
      class="origin-center transition-all" :class="[
        open && 'scale-90 opacity-0',
      ]"
    />
    <path
      d="M2 2L12 12M12 2L2 12"
      class="origin-center transition-all" :class="[
        !open && 'scale-150 opacity-0',
      ]"
    />
  </svg>
</template>
