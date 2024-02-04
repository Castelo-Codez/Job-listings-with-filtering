<script setup>
import {ref} from "vue";
import {$Merge} from "./../helpers/merge";
import PrimaryBtn from "./PrimaryBtn.vue";
import FeaturedSpan from "./FeaturedSpan.vue";
import NewSpan from "./NewSpan.vue";
import MainTitle from "./MainTitle.vue";
import TimeLocation from "./TimeLocation.vue";
import CompanyTitle from "./CompanyTitle.vue";
import {onMounted} from "vue";
import Aos from "aos";
import "aos/dist/aos.css";
const $props = defineProps({
    id: Number,
    company: String,
    logo: String,
    new: Boolean,
    featured: Boolean,
    position: String,
    role: String,
    level: String,
    postedAt: String,
    contract: String,
    location: String,
    languages: Array,
    tools: Array,
});
let $skills = [...$props.languages, ...$props.tools];
let $mergedSkills = $Merge($props.role, $props.level, $skills);
onMounted(() => {
    Aos.init();
    Aos.init({
        offset: 110, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 200,
    });
});
</script>
<template>
    <li role="listitem" :key="$props.id" class="card" data-aos="fade-up">
        <div class="logo">
            <img :src="$props.logo" alt="logo" />
        </div>
        <div class="mainInfo">
            <div class="layer-1">
                <ul role="list">
                    <li role="listitem">
                        <CompanyTitle :content="$props.company" />
                    </li>
                    <li role="listitem" v-if="$props.new">
                        <NewSpan />
                    </li>
                    <li role="listitem" v-if="$props.featured">
                        <FeaturedSpan />
                    </li>
                </ul>
                <MainTitle :content="$props.position" />
                <ul role="list">
                    <TimeLocation
                        :content="$el"
                        :key="$key"
                        v-for="($el, $key) in [
                            $props.postedAt,
                            $props.contract,
                            $props.location,
                        ]"
                    />
                </ul>
            </div>
            <div class="layer-2">
                <ul role="list">
                    <li role="listitem" v-for="$el in $mergedSkills">
                        <PrimaryBtn :content="$el" />
                    </li>
                </ul>
            </div>
        </div>
    </li>
</template>
<style lang="scss" scoped>
@import "../style/globals";
li {
    &.card {
        &:is(:first-child) {
            border-left: 5px solid var(--primary-Desaturated-Dark-Cyan);
            & + li {
                border-left: 5px solid var(--primary-Desaturated-Dark-Cyan);
            }
        }
        --main-layer-padd: 15px;
        background-color: white;
        margin-bottom: $main-space;
        box-shadow: 0px 5px 39px -15px var(--primary-Desaturated-Dark-Cyan);
        padding: 41px 15px 15px;
        border-radius: var(--main-radius);
        position: relative;
        @extend%main-box-shadow;
        @media (min-width: 991.5px) {
            display: flex;
            column-gap: 30px;
            padding: 30px 30px 30px 50px;
            align-items: center;
        }
    }

    .logo {
        max-width: 50px;
        position: absolute;
        top: -21px;
        img {
            width: 100%;
        }
        @media (min-width: 991.5px) {
            position: static;
            width: fit-content;
            max-width: 100%;
        }
    }
    .mainInfo {
        @media (min-width: 991.5px) {
            flex: 1;
            display: flex;
            column-gap: 80px;
            align-items: center;
        }
    }
    .layer-1 {
        display: flex;
        flex-direction: column;
        row-gap: 20px;
        padding-bottom: var(--main-layer-padd);
        border-bottom: 1px solid var(--Dark-Grayish-Cyan);
        @media (min-width: 991.5px) {
            row-gap: 8px;
            padding-bottom: 0;
            border-bottom: 0;
        }
        > ul:first-child {
            display: flex;
            align-items: center;
            column-gap: 8px;
        }
        > ul:last-child {
            display: flex;
            column-gap: 18px;
        }
    }
    .layer-2 {
        padding-top: var(--main-layer-padd);
        @media (min-width: 991.5px) {
            flex: 1;
            padding-top: 0;
        }

        ul {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            @media (min-width: 991.5px) {
                width: 100%;
                justify-content: flex-end;
            }
        }
    }
}
li {
}
</style>
