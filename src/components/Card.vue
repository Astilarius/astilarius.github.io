<script setup>
defineProps({
    title: String,
    image: {},
})
</script>

<template>
    <div class="card">
        <img class="card__image" :src="image" :alt="title" />
        <span class="card__text" v-html="title"/>
    </div>
</template>

<style scoped lang="scss">
@use './../variables';

.card {
    position: relative;
}

.card__image {
    max-width: 100%;
}

.card__text {
    position: absolute;
    bottom: 0.75rem;
    left: 0.5rem;
    max-width: 85%;
    color: variables.$white;
    font-size: 0.75rem;
    .pt & {
        font-size: 0.65rem;
        left: 0.25rem;
        max-width: 95%;
    }
    .es & {
        font-size: 0.6rem;
        left: 0.25rem;
        max-width: 90%;
    }
}
</style>
