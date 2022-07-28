<template>
  <h1>Closed Tasks</h1>
  <Tasks :task-state="taskState"/>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import Tasks from "@/components/Tasks.vue";
import {TaskState} from "@/types/TaskState";


const taskState = ref(TaskState.CLOSED)

</script>

<style scoped>

</style>