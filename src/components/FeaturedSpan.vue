<script setup>
defineProps(["content"]);
</script>
<template>
    <span class="featers"> Featured </span>
</template>
<style lang="scss" scoped>
@import "../style/globals";
span {
    @extend%mainspan;
    background-color: var(--Very-Dark-Grayish-Cyan);
}
</style>
