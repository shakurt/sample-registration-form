<script setup lang="js">
defineProps({
  variant: {
    type: String, // primary || outline
    required: true
  },
  type: {
    type: String,
    required: true
  }
})
</script>

<template>
  <button :type class="button" :class="variant">
    <slot />
  </button>
</template>

<style scoped lang="css">
.button {
  @apply min-w-16 rounded-full px-5 py-2 text-white outline-none transition-all;
}

.button.primary {
  @apply bg-secondary font-bold hover:bg-secondary-700;
}

.button.outline {
  @apply border-2 border-secondary  hover:bg-secondary;
}
</style>
