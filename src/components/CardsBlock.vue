<script setup>
import Card from "./Card.vue"
import art_creation from './../assets/cards/art_creation.png'
import exclusive_styles from '../assets/cards/exclusive_styles.png'
import magic_avatars from './../assets/cards/magic_avatars.png'
</script>

<template>
    <div class="flex flex-row gap-1">
        <Card :image="art_creation" title="Unlimited Art Creation"/>
        <Card :image="exclusive_styles" title="Exclusive Styles"/>
        <Card :image="magic_avatars" title="Magic Avatars With 20% Off"/>
    </div>
</template>

<style scoped>
</style>
