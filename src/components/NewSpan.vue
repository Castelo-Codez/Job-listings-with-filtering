<script setup>
defineProps(["content"]);
</script>
<template>
    <span class="featers"> New! </span>
</template>
<style lang="scss" scoped>
@import "../style/globals";
span {
    @extend%mainspan;
    background-color: var(--primary-Desaturated-Dark-Cyan);
}
</style>
