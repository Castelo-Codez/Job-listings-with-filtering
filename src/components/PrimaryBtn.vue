<script setup>
import {$store} from "@/store/store";
const $Prop = defineProps(["content"]);

function addFilter() {
    $store.searchingArr.includes($Prop.content)
        ? ""
        : $store.searchingArr.push($Prop.content);
}
</script>
<template>
    <button
        class="primary-btn"
        aria-label="add filter"
        role="button"
        type="button"
        @click="addFilter"
    >
        {{ content }}
    </button>
</template>
<style scoped lang="scss">
@import "../style/globals";
button {
    display: block;
    border: none;
    cursor: pointer;
    @extend%primary;
    @extend%main-transition;
    &:hover {
        background-color: var(--primary-Desaturated-Dark-Cyan);
        color: var(--Light-Grayish-Cyan-Background);
    }
}
</style>
