<script setup lang="js">
import NotFoundImage from '@/assets/images/not-found.svg'
import Button from '@/components/ui/Button.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <main class="flex w-full flex-col items-center">
    <img :src="NotFoundImage" alt="not found" />
    <Button variant="plain-text" class="mt-5 max-w-36 md:w-full" type="button">
      <RouterLink to="/">Home Page</RouterLink>
    </Button>
  </main>
</template>
