<script setup>
import Card from "./Card.vue"
import art_creation from './../assets/cards/art_creation.webp'
import exclusive_styles from '../assets/cards/exclusive_styles.webp'
import magic_avatars from './../assets/cards/magic_avatars.webp'
</script>

<template>
    <div class="cards-block">
        <Card :image="art_creation" :title="$t('Unlimited Art <br>Creation')"/>
        <Card :image="exclusive_styles" :title="$t('Exclusive <br>Styles')"/>
        <Card :image="magic_avatars" :title="$t('Magic Avatars <br>With 20% Off')"/>
    </div>
</template>

<style scoped lang="scss">
.cards-block {
    margin-bottom: 0.875rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 0.25rem;
    @media only screen and (min-height: 844px) {
        margin-bottom: 19px;
    }
}
</style>
