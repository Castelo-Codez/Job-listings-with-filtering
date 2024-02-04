<script setup>
import {$store} from "@/store/store";
import FilterBtn from "./FilterBtn.vue";
</script>
<template>
    <form
        :class="{active: $store.searchingArr.length ? true : false}"
        @submit="(e) => e.preventDefault()"
    >
        <div class="parent">
            <ul role="list">
                <li
                    role="listitem"
                    v-for="($el, $key) in $store.searchingArr"
                    :key="$key"
                >
                    <FilterBtn :content="$el" />
                </li>
            </ul>
            <button role="button" @click="$store.searchingArr.length = 0">
                clear
            </button>
        </div>
    </form>
</template>
<style scoped lang="scss">
@import "../style/globals";
form {
    background-color: white;
    border-radius: var(--main-radius);
    @extend%main-box-shadow;
    transition-duration: 0.2s;
    transition-timing-function: ease;
    transition-property: transform opacity;
    transform: translate3d(0px, 200px, 0px);
    opacity: 0;
    margin-bottom: $main-space;
    visibility: visible;

    &.active {
        opacity: 1;
        transform: translateZ(0);
    }
    .parent {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px;
        > button {
            border: none;
            background: none;
            color: var(--primary-Desaturated-Dark-Cyan);
            font-weight: 600;
            font-size: 19px;
            text-transform: capitalize;
            flex: 1;
            cursor: pointer;
            &:hover {
                text-decoration: underline;
            }
        }
    }
    ul {
        flex-basis: 95%;
        padding: 10px;
        display: flex;
        gap: 15px;
        flex-wrap: wrap;
    }
}
</style>
