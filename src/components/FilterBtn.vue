<script setup>
import {$store} from "@/store/store";
let $prop = defineProps(["content"]);
function removeKeyword() {
    return $store.searchingArr.splice(
        $store.searchingArr.indexOf($prop.content),
        1
    );
}
</script>
<template>
    <div class="filter">
        <span class="search-key">{{ content }}</span>
        <button
            role="button"
            @click="removeKeyword"
            aria-label="KeyWord Removal button"
            type="button"
        >
            <span class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14">
                    <path
                        fill="#FFF"
                        fill-rule="evenodd"
                        d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"
                    />
                </svg>
            </span>
        </button>
    </div>
</template>
<style lang="scss" scoped>
@import "../style/globals";
.filter {
    display: flex;
    .search-key {
        @extend%primary;
        & + button {
            width: 30px;
            border: none;
            background-color: var(--primary-Desaturated-Dark-Cyan);
            display: flex;
            justify-content: center;
            align-items: center;
            border-top-right-radius: var(--main-radius);
            border-bottom-right-radius: var(--main-radius);
            cursor: pointer;
            @extend%main-transition;
            &:hover {
                background-color: var(--Very-Dark-Grayish-Cyan);
            }
        }
    }
}
</style>
