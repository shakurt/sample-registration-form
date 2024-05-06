<script setup lang="js">
defineProps({
  userInfo: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="">
    <p class="text-xl text-white">
      Username:
      <span class="font-bold">{{ userInfo.username }}</span>
    </p>
    <p class="text-xl text-white">
      Email:
      <span class="font-bold">{{ userInfo.email }}</span>
    </p>
  </div>
</template>
