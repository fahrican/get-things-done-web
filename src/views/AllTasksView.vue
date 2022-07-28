<template>
  <h1>All Tasks</h1>
  <TasksComponent :task-state="taskState"/>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import TasksComponent from "@/components/TasksComponent.vue";
import {TaskState} from "@/types/TaskState";

const taskState = ref(TaskState.ALL)

</script>

<style scoped>

</style>