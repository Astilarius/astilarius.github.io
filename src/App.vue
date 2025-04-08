<script setup>

import Background from "./components/Background.vue";
import Footer from "./components/Footer.vue";
import ButtonsBlock from "./components/ButtonsBlock.vue";
import CardsBlock from "./components/CardsBlock.vue";
import {useI18n} from "vue-i18n";
import {onMounted} from "vue";

const { locale } = useI18n();

function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

const systemLanguage = navigator.language || navigator.userLanguage;
const routeLang = getQueryParam('lang') || systemLanguage.split('-')[0];

onMounted(() => {
    if (routeLang) {
        locale.value = routeLang;
    }
});
</script>

<template>
    <Background/>
    <div class="content" :class="routeLang">
        <a href="#" class="cross-button">
            <img src="./assets/cross.svg" alt="Cross" />
        </a>
        <h1 class="page-title" v-html="$t('Get Unlimited <br>Access')" />
        <CardsBlock/>
        <ButtonsBlock/>
        <Footer/>
    </div>
</template>

<style scoped lang="scss">
@use "variables";

.content {
    padding: 0 1.5rem 0 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: flex-end;
    height: 100%;

    .cross-button {
        position: absolute;
        width: 0.75rem;
        height: 0.75rem;
        padding: 0.375rem;
        top: 37px;
        left: 16px;
        @media only screen and (min-height: 844px) {
            top: 64px;
        }
    }

    .page-title {
        margin: 0 0 0.375rem 0;
        text-align: center;
        font-size: 2.8125rem;
        letter-spacing: 0.02em;
        line-height: 1;
        font-weight: 800;
        color: variables.$white;
        @media only screen and (min-height: 844px) {
            margin: 0 0 1rem 0;
        }
    }
}
.pt .page-title, .ja .page-title {
    @media only screen and (max-height: 667px) {
        font-size: 2.85rem;
    }
}
</style>
