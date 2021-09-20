<template>
    <div class='text-xl'>
        <banner />
        <section v-for="i in 2" :key='i'>
            <subject />
            <div class="grid grid-cols-8 gap-4 m-5 px-4 py-2">
                <course  v-for="c in 10" :key='`course${c}`' class="" />
            </div>
        </section>
    </div>
</template>

<script lang="ts">
export default {
    name: 'Home',
    setup () {
        

        return {}
    }
}
</script>

<style scoped>

</style>