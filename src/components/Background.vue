<script setup>
import moon from './../assets/background/moon.png'
import flamingo from './../assets/background/flamingo.png'
import woman from './../assets/background/woman.png'
import barbie from './../assets/background/barbie.png'
import black_hole from './../assets/background/black_hole.png'
import castle from './../assets/background/castle.png'
import apocalypse from './../assets/background/apocalypse.png'
import pope from './../assets/background/pope.png'
import space from './../assets/background/space.png'
import pickachu from './../assets/background/pickachu.png'
import mountains from './../assets/background/mountains.png'
import woman_in_car from './../assets/background/woman_in_car.png'

const images = [
    [
        moon,
        flamingo,
        woman
    ],
    [
        barbie,
        black_hole,
        castle,
        barbie
    ],
    [
        apocalypse,
        pope,
        space
    ],
    [
        pickachu,
        mountains,
        woman_in_car,
        pickachu
    ]
]
</script>

<template>
    <div class="background">
        <div class="background__blur"/>
        <div class="background__wrapper">
            <div class="background__table">
                <div v-for="column in images" class="background__column">
                    <img v-for="image in column" :src="image" alt="background image" class="background__image">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "./../style.scss";

.background {
    position: relative;
    z-index: -10;

    .background__blur {
        position: absolute;
        top: -2rem;
        filter: blur(100.5px);
        width: 100%;
        height: 7rem;
        background-color: $color-blur;
        opacity: 0.6;
        border-radius: 100%;
    }

    .background__wrapper {
        position: absolute;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        background: linear-gradient(196.56deg, rgba(0, 0, 0, 9.5e-05) 10.43%, rgba(21, 5, 52, 0.641925) 30.66%, rgba(0, 0, 0, 0.855327) 37.66%, rgba(9, 1, 25, 0.95) 45.57%, rgba(0, 0, 0, 0.95) 77.38%, rgba(5, 1, 14, 0.95) 94.32%);

        .background__table {
            z-index: -10;
            position: absolute;
            bottom: calc(-397.5px + 62.15%);
            left: -2.5rem;
            display: flex;
            flex-direction: row;
            width: 100%;
            gap: 0.5rem;
            rotate: 9deg;

            .background__column {
                display: flex;
                flex-direction: column;
                min-width: 28.9%;
                gap: 0.5rem;
                &:nth-child(even) {
                    margin-top: 23.4%;
                }

                .background__image {
                    border-radius: 9.31px;
                    height: 49.2vw;
                    object-fit: cover;
                }
            }
        }
    }
}
</style>
