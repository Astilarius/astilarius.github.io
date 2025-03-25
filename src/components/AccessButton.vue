<script setup>
defineProps({
    title: String,
    hint: String,
    price: String,
    isBestOffer: Boolean,
})
</script>

<template>
    <button class="relative bg-white/10 text-white rounded-full w-full py-2 flex flex-row text-base justify-between pl-6 pr-14 items-center">
        <span v-if="isBestOffer" class="absolute bg-white text-main-text -top-3 right-6 rounded-full px-5 py-0.5 font-bold text-sm">BEST OFFER</span>
        <span class="flex flex-col items-start">
            <span class="font-semibold">{{title}}</span>
            <span class="text-white/70">{{hint}}</span>
        </span>
        <span class="w-17 text-white/70 text-start">{{price}}</span>
    </button>
</template>

<style scoped>
</style>
