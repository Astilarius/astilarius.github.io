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
@import "./../style.scss";

.card {
    position: relative;
}

.card__image {
    height: 140px;
}

.card__text {
    position: absolute;
    bottom: 0.75rem;
    left: 0.5rem;
    max-width: 85%;
    color: $white;
    font-size: 0.75rem;
}
</style>
