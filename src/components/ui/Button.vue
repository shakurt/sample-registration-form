<script setup lang="js">
defineProps({
  variant: {
    type: String, // primary || outline
    required: true
  },
  type: {
    type: String,
    required: true
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false
  }
})
</script>

<template>
  <button :type class="button" :disabled :class="variant">
    <slot />
  </button>
</template>

<style scoped lang="css">
.button {
  @apply min-w-16 rounded-full px-5 py-2 text-base font-bold text-white outline-none transition-all;
}

.button.primary {
  @apply bg-secondary   disabled:bg-secondary-400 [&:not([disabled])]:hover:bg-secondary-700;
}

.button.outline {
  @apply border-2 border-secondary  [&:not([disabled])]:hover:bg-secondary;
}
</style>
