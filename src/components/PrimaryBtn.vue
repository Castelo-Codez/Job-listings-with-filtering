<script setup>
import {$store} from "@/store/store";
import {watch} from "vue";
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
        :selected="$store.searchingArr.includes(content)"
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
    &[selected="true"] {
        background-color: var(--primary-Desaturated-Dark-Cyan);
        color: var(--Light-Grayish-Cyan-Background);
    }
}
</style>
