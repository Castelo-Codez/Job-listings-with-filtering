<script setup>
import {$store} from "@/store/store";
import JobCard from "./JobCard.vue";
import Form from "./Form.vue";
</script>
<template>
    <main>
        <div class="container">
            <Form />
            <TransitionGroup name="list" tag="ul">
                <JobCard
                    v-for="job in $store.mainArr"
                    :id="job.id"
                    :company="job.company"
                    :logo="job.logo"
                    :new="job.new"
                    :featured="job.featured"
                    :position="job.position"
                    :role="job.role"
                    :level="job.level"
                    :postedAt="job.postedAt"
                    :contract="job.contract"
                    :location="job.location"
                    :languages="job.languages"
                    :tools="job.tools"
                    :key="job.id"
                />
            </TransitionGroup>
        </div>
    </main>
</template>
<style lang="scss" scoped>
.container {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 10.5rem;
    z-index: 111111;
}
.list-enter-active,
.list-leave-active {
    transition: all 0.3s ease;
}
.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
</style>
