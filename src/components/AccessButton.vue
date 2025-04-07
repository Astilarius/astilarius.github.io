<script setup>
defineProps({
    title: String,
    hint: String,
    price: String,
    isBestOffer: {
        type: Boolean,
        default: false,
    },
    isSelected: {
        type: Boolean,
        default: false,
    },
})
</script>

<template>
    <div class="access-button-wrapper" :class="{ selected: isSelected, 'best-offer': isBestOffer }">
        <button class="access-button" :class="{ selected: isSelected }" v-on:click="$emit('click')">
            <span v-if="isBestOffer" class="access-button__best-offer-wrapper">
                <span class="access-button__best-offer">{{ $t('BEST OFFER') }}</span>
            </span>
            <span class="access-button__text-block">
                <span class="access-button__title">{{title}}</span>
                <span class="access-button__hint">{{hint}}</span>
            </span>
            <span class="access-button__price" v-html="price"/>
        </button>
    </div>
</template>

<style scoped lang="scss">
@use "sass:color";
@use './../variables';

.access-button-wrapper {
    display: flex;
    align-items: end;
    justify-content: start;
    border-radius: 100px;
    height: variables.$button-height;

    &.best-offer {
        background: linear-gradient(160deg, transparent, rgba(253, 148, 244, 0) 10%, #FD94F4 50%, #01B4FF 70%, rgba(1, 180, 255, 0) 85%, transparent 100%);
    }
    &.selected {
        background: transparent;
    }
}

.access-button {
    position: relative;
    background-color: variables.$access-button-bg;

    color: variables.$white;
    border-radius: 100px;
    width: calc(100% - 1px);
    height: calc(100% - 1px);
    padding: 0.5rem 1.5rem 0.5rem 1.5rem;
    display: flex;
    gap: 0.5rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-width: 1px;
    border-style: solid;
    border-color: transparent;


    &.selected {
        border-width: 1px;
        border-color: variables.$white;
        background-color: variables.$access-button-bg-active;

        .access-button__best-offer-wrapper {
            background: variables.$white;
            .access-button__best-offer {
                background: variables.$white;
                color: variables.$color-main-text;
            }
        }
    }

    .access-button__best-offer-wrapper {
        background: linear-gradient(270deg, #00B5FF 0%, #632AF7 53.01%, #FF96F4 100%);
        position: absolute;
        top: -0.75rem;
        right: 1.5rem;
        border-radius: 100px;
        height: 1.25rem;
        width: fit-content;
        display: flex;
        align-items: center;
        justify-content: center;

        .access-button__best-offer {
            background: linear-gradient(90deg, #BC1FEF 0%, #0035FF 100%);
            color: variables.$white;
            border-radius: 100px;
            padding: 0.125rem 1.125rem 0.125rem 1.125rem;
            font-weight: 700;
            font-size: 0.75rem;
        }
    }

    .access-button__text-block {
        display: flex;
        flex-direction: column;
        align-items: start;

        .access-button__title {
            font-size: 1rem;
            text-align: start;
            font-weight: 600;
            letter-spacing: -1px;
            .de & {
                font-size: 0.9rem;
            }
        }

        .access-button__hint {
            opacity: 0.7;
            color: variables.$white;
            font-size: 1rem;
            font-weight: 400;
            .fr & {
                font-size: 0.9rem;
            }
        }
    }

    .access-button__price::first-line {
        font-size: 1rem;
    }
    .access-button__price {
        opacity: 0.7;
        color: variables.$white;
        width: 5.625rem;
        text-align: start;
        font-size: calc(1rem - 1px);
        font-weight: 400;
    }
}
</style>
