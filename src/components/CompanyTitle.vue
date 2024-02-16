<script setup>
defineProps(["content"]);
</script>
<template>
    <h1 aria-level="4" role="heading">{{ content }}</h1>
</template>
<style lang="scss" scoped>
h1 {
    color: var(--primary-Desaturated-Dark-Cyan);
    text-transform: capitalize;
    font-size: 18px;
    font-weight: 700;
}
</style>
