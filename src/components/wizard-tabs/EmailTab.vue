<script setup lang="js">
defineProps({
  error: {
    type: String,
    required: false,
    default: ''
  }
})

const email = defineModel({ type: String, required: true })
</script>

<template>
  <div class="mx-auto flex w-full max-w-96 flex-col">
    <label for="email" class="mb-2 text-lg text-white">Enter Email:</label>
    <input v-model="email" id="email" name="email" autofocus class="input" type="text" />
    <Transition name="fade-preset" mode="out-in">
      <p v-if="error" class="mt-1 text-sm text-red-500">{{ error }}</p>
    </Transition>
  </div>
</template>
