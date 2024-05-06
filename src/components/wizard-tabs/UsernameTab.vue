<script setup lang="js">
defineProps({
  error: {
    type: String,
    required: false,
    default: ''
  },
  valid: {
    type: String,
    required: false,
    default: ''
  }
})

const username = defineModel({ type: String, required: true })
</script>

<template>
  <div class="mx-auto flex w-9/12 flex-col">
    <label for="username" class="mb-2 text-lg text-white">Username:</label>
    <input v-model="username" id="username" name="username" autofocus class="input" type="text" />
    <Transition name="fade-preset" mode="out-in">
      <p v-if="error" class="mt-1 text-sm text-red-500">{{ error }}</p>
      <p v-else-if="valid" class="mt-1 text-sm text-green-500">{{ valid }}</p>
    </Transition>
  </div>
</template>
