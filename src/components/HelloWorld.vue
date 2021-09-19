<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
<div class="flex justify-center items-center h-screen text-7xl font-bold">
  <h1>{{ msg }}</h1>
</div>

</template>

<style scoped>

</style>
