<script setup>
defineProps({
    title: String,
    image: {},
})
</script>

<template>
    <div class="relative">
        <img :src="image" :alt="title" />
        <span class="absolute bottom-3 left-2 max-w-[85%] text-white text-xs">{{ title }}</span>
    </div>
</template>

<style scoped>
</style>
