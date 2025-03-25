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
    <div class="absolute -top-52 -left-10 flex flex-row w-full gap-2 rotate-9">
        <div v-for="column in images" class="flex flex-col min-w-[28.9%] gap-2 odd:mt-[14.4%]">
            <img v-for="image in column" :src="image" alt="background image" class="rounded-lg h-[49.2vw] object-cover">
        </div>
    </div>
</template>

<style scoped>
</style>
