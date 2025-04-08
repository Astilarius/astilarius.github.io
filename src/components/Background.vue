<script setup>
import backgroundx2 from './../assets/background/backgroundx2.webp'
import backgroundx3 from './../assets/background/backgroundx3.webp'

</script>

<template>
    <div class="background">
        <div class="background__blur"/>
        <div class="background__gradient"/>
        <div class="background__dark-gradient"/>
        <div class="background__wrapper">
            <picture class="background__picture">
                <source :srcset="backgroundx3" media="(min-resolution: 3dppx)">
                <source :srcset="backgroundx2" media="(min-resolution: 2dppx)">
                <img :src="backgroundx2" alt="background image" class="background__image">
            </picture>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "./../variables";

.background {
    position: relative;
    z-index: -10;

    .background__blur {
        position: absolute;
        top: -3.5rem;
        filter: blur(35px);
        width: 100%;
        height: 7rem;
        background-color: variables.$color-blur;
        opacity: 0.6;
        border-radius: 100%;
    }

    .background__gradient {
        position: absolute;
        width: 100vw;
        height: 100vh;
        opacity: 0.1;
        background: linear-gradient(136.59deg, #DA28FF 3.34%, #7FCCFF 92.15%);
    }

    .background__dark-gradient {
        position: absolute;
        width: 100vw;
        height: 100vh;
        background: linear-gradient(196.56deg, rgba(0, 0, 0, 9.5e-05) 10.43%, rgba(21, 5, 52, 0.641925) 30.66%, rgba(0, 0, 0, 0.855327) 37.66%, rgba(9, 1, 25, 0.95) 45.57%, rgba(0, 0, 0, 0.95) 77.38%, rgba(5, 1, 14, 0.95) 94.32%);
    }

    .background__wrapper {
        position: absolute;
        width: 100vw;
        height: 100vh;
        overflow: hidden;

        .background__picture {
            z-index: -10;
            position: absolute;
            bottom: calc(-340.33px + 79.66%);
            left: calc(-310px + 66.66%);
            display: flex;
            flex-direction: row;
            width: 100%;
            gap: 0.4rem;
            rotate: 9deg;

            .background__image {
                width: 461px;
            }
        }
    }
}
</style>
