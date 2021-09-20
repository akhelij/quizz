<template>
    <div class="flex flex-row p-2 pl-4 m-5 bg-gradient-to-br from-blue-400 to-gray-200 shadow-md font-semibold text-white rounded-tr-3xl rounded-bl-3xl">
        <div class="w-1/2 flex flex-col justify-between">
        <h1>Bonjour Mohamed !</h1>
        <span>Badge</span>
        </div>
        <div v-if="newby" class="w-1/2 flex flex-col justify-between">
          <h2>Lancer votre premier questionnaire !</h2>
          <span>Quizz Populaire</span>
        </div>
        <div v-else class="w-1/2 flex flex-col justify-between">
          <h2>Last Quizz</h2>
          <span>Quizz Populaire</span>
          <span> Progress bar </span>
        </div>
    </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";

 const newby = ref(true);

</script>

<style lang="scss" scoped>

</style>