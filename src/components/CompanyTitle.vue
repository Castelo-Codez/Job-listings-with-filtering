<script setup>
defineProps(["content"]);
</script>
<template>
    <h4>{{ content }}</h4>
</template>
<style lang="scss" scoped>
h4 {
    color: var(--primary-Desaturated-Dark-Cyan);
    text-transform: capitalize;
    font-size: 18px;
    font-weight: 700;
}
</style>
