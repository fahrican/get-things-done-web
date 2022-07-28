<template>
  <div class="card">
    <div class="container">
      <h1>Single Task</h1>
      <h3>{{ saveTask.description }}</h3>
      <p>createdOn: {{ saveTask.createdOn }}</p>
      <p>time interval: {{ saveTask.timeInterval }}</p>
      <p>priority: {{ saveTask.priority }}</p>
      <p>reminder set: {{ saveTask.isReminderSet }}</p>
      <p>started on: {{ saveTask.startedOn }}</p>
      <p>finished on: {{ saveTask.finishedOn }}</p>
      <p>time taken: {{ saveTask.timeTaken }}</p>
      <p>task open: {{ saveTask.isTaskOpen }}</p>
      <i @click="deleteTask(saveTask.id)" class="fas fa-trash"/>
      <router-link @click="storeSelectedTask(saveTask)" to="edit-task"><i class="fas fa-edit"/></router-link>
    </div>
  </div>

</template>

<script lang="ts" setup>
import {storeToRefs} from "pinia";
import {useSavedTask} from "@/stores/useSavedTask";
import {TaskRequest} from "@/types/TaskRequest";
import TaskApi from "@/services/TaskApi";
import router from "@/router";

const selectedTask = useSavedTask();
const {saveTask} = storeToRefs(selectedTask);
const storeSelectedTask = (task: TaskRequest) => selectedTask.storeTask(task);

const deleteTask = async (id: number) => {
  if (confirm('Are you sure, you want to delete?')) {
    return await TaskApi.deleteTask(id).then(() => {
      router.push('/')
    });
  }
}

</script>

<style scoped>

</style>