<script setup>

import Background from "./components/Background.vue";
import Footer from "./components/Footer.vue";
import ButtonsBlock from "./components/ButtonsBlock.vue";
import CardsBlock from "./components/CardsBlock.vue";

</script>

<template>
    <Background/>
    <div class="px-6 flex flex-col gap-2">
        <h1 class="text-center text-5xl font-extrabold text-white pt-40">Get Unlimited Access</h1>
        <a href="#" class="cross-button">
            <img src="./assets/cross.svg"/>
        </a>
        <CardsBlock/>
        <ButtonsBlock/>
        <Footer/>
    </div>
</template>

<style scoped>

</style>
