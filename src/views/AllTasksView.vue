<template>
  <h1>All Tasks</h1>
  <Tasks :task-state="taskState"/>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import Tasks from "@/components/Tasks.vue";
import {TaskState} from "@/types/TaskState";

const taskState = ref(TaskState.ALL)

</script>

<style scoped>

</style>