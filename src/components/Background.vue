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
    <div class="relative -z-10">
        <div class="absolute -top-10 blur-[100px] bg-blur/60 h-25 w-full"/>
        <div class="absolute w-screen h-screen overflow-hidden bg-gradient">
            <div class="-z-10 absolute bottom-[calc(-276.5px+69.5%)] -left-10 flex flex-row w-full gap-2 rotate-9">
                <div v-for="column in images" class="flex flex-col min-w-[28.9%] gap-2 odd:mt-[23.4%]">
                    <img v-for="image in column" :src="image" alt="background image" class="rounded-lg h-[49.2vw] object-cover">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.bg-gradient {
    background: linear-gradient(196.56deg, rgba(0, 0, 0, 9.5e-05) 10.43%, rgba(21, 5, 52, 0.641925) 30.66%, rgba(0, 0, 0, 0.855327) 37.66%, rgba(9, 1, 25, 0.95) 45.57%, rgba(0, 0, 0, 0.95) 77.38%, rgba(5, 1, 14, 0.95) 94.32%);
}
</style>
