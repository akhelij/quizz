<template>
    <div class="flex flex-row justify-between items-center px-4 py-2 m-5 bg-gradient-to-br from-blue-400 to-gray-200 shadow-md font-semibold text-white rounded-tr-3xl rounded-bl-3xl">
       
        <h1>Mathématiques</h1>       
        
        <button :class="deployed ? 'rotate-180' : 'rotate-0'" class="transform duration-150 cursor-pointer" @click="deployed = !deployed">
         <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
        </button>
       
    </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";

 const deployed = ref(false);

</script>

<style lang="scss" scoped>

</style>