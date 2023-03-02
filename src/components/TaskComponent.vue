<template>
  <div class="card">
    <div class="container">
      <h3>
        <router-link @click="storeSelectedTask(task)" to="single-task">{{ task.description }}</router-link>
      </h3>
      <p>createdOn: {{ task.createdOn }}</p>
      <p>time interval: {{ task.timeInterval }}</p>
      <p>priority: {{ task.priority }}</p>
      <i @click="$emit('delete-task', task.id)" class="fas fa-trash"/>
      <router-link @click="storeSelectedTask(task)" to="edit-task"><i class="fas fa-edit"/></router-link>
    </div>
  </div>

</template>

<script lang="ts" setup>
import {PropType, defineProps} from "vue";
import {useSavedTask} from "@/stores/useSavedTask";
import {TaskDto} from "@/types/TaskDto";

defineProps({
  task: Object as PropType<TaskDto>,
});

const selectedTask = useSavedTask();

const storeSelectedTask = (task: TaskDto) => selectedTask.storeTask(task);


</script>

<style lang="scss">
</style>