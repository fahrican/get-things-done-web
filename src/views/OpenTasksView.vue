<template>
  <h1>Open Tasks</h1>
  <Tasks :task-state="taskState"/>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import Tasks from "@/components/Tasks.vue";
import {TaskState} from "@/types/TaskState";


const taskState = ref(TaskState.OPEN)

</script>

<style lang="scss" scoped>
</style>
