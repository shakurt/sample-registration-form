<script setup lang="js">
import { RouterView } from "vue-router";
</script>

<template>
	<div
		aria-label="a wrapper for our pages to center items"
		class="grid place-items-center h-screen container bg-secondary"
	>
		<RouterView />
	</div>
</template>
