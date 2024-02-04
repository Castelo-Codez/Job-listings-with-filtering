<script setup>
defineProps(["content"]);
</script>
<template>
    <h2>{{ content }}</h2>
</template>
<style lang="scss" scoped>
@import "../style/globals";
h2 {
    text-transform: capitalize;
    font-weight: 700;
    color: var(--Very-Dark-Grayish-Cyan);
    font-size: 1.3rem;
    cursor: pointer;
    @extend%main-transition;
    &:hover {
        color: var(--primary-Desaturated-Dark-Cyan);
    }
    @media (min-width: 767.5px) {
        font-size: 1.5rem;
    }
}
</style>
