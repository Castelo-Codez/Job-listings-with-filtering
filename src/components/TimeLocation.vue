<script setup>
defineProps(["content"]);
</script>
<template>
    <li role="listitem" aria-label="time & location info ">
        {{ content }}
    </li>
</template>
<style lang="scss" scoped>
li {
    padding: 3px;
    border-radius: var(--main-radius);
    color: var(--Dark-Grayish-Cyan);
    position: relative;
    width: fit-content;
    &:is(:not(:last-child)) {
        &::after {
            --dimen: 4px;
            content: "";
            position: absolute;
            width: var(--dimen);
            height: var(--dimen);
            border-radius: 50%;
            background-color: var(--Dark-Grayish-Cyan);
            top: 50%;
            transform: translateY(-50%);
            right: -15%;
        }
    }
}
</style>
