<script setup>
import Button from "./Button.vue";
import AccessButton from "./AccessButton.vue";
import {ref} from "vue";

const selectedButton = ref(0);

const selectButton = (index) => {
    selectedButton.value = index;
};
</script>

<template>
    <div class="buttons-block">
        <AccessButton
            @click="selectButton(0)"
            :is-best-offer="true"
            :title="$t('YEARLY ACCESS')"
            :hint="$t('Just {{price}} per year', { price: '$39.99' })"
            :price="$t('{{price}} <br>per week', { price: '$0.48' })"
            :is-selected="selectedButton === 0"
        />
        <AccessButton
            @click="selectButton(1)"
            :title="$t('WEEKLY ACCESS')"
            :price="$t('{{price}} <br>per week', { price: '$6.99' })"
            :is-selected="selectedButton === 1"
        />
        <a :href="selectedButton === 0 ? 'https://apple.com/' : 'https://google.com/ '" class="button">{{ $t('Continue') }}</a>
    </div>
</template>

<style scoped lang="scss">
@use "./../variables";

.buttons-block {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    background-color: variables.$white;
    color: variables.$color-main-text;
    width: 100%;
    height: variables.$button-height;
    border-radius: 100px;
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 1.5rem;
}
</style>
