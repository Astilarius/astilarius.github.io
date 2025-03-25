<script setup>

import Button from "./Button.vue";
import AccessButton from "./AccessButton.vue";
</script>

<template>
    <div class="flex flex-col gap-2">
        <AccessButton :is-best-offer="true" title="YEARLY ACCESS" hint="Just $39.99 per year" price="$0.48 per week"/>
        <AccessButton :is-best-offer="false" title="WEEKLY ACCESS" price="$6.99 per week"/>
        <Button>Continue</Button>
    </div>
</template>

<style scoped>
</style>
