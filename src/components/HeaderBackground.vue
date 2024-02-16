<script setup></script>
<template>
    <div class="background" aria-hidden="true"></div>
</template>
<style scoped lang="scss">
.background {
    background-image: url("/images/bg-header-mobile.svg");
    @media (min-width: 575.5px) {
        background-image: url("/images/bg-header-desktop.svg");
    }
    background-color: var(--primary-Desaturated-Dark-Cyan);
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 200px;
}
</style>
