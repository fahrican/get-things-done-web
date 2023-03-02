<template>
  <h1>Edit Task</h1>
  <form class="form-inline" @submit="onSubmit">

    <label class="user-input" for="task">Task:</label>
    <input class="user-input" type="text" placeholder="Could be: Feed the cat.." name="description"
           v-model="saveTask.description">

    <label class="user-input" for="created-on">Created on:</label>
    <input class="user-input" type="text" placeholder="Could be: 2022-06-22T23:35:53" name="created-on"
           v-model="saveTask.createdOn">

    <label class="user-input" for="time-interval">Time Interval:</label>
    <input class="user-input" type="text" placeholder="Could be: 24h" name="time_interval"
           v-model="saveTask.timeInterval">

    <label class="user-input" for="time-taken">Time Taken:</label>
    <input class="user-input" type="number" placeholder="Could be: 0" name="time-taken" v-model="saveTask.timeTaken">

    <label class="user-input" for="is-task-open">Is task still open?</label>

    <input type="radio" v-model="saveTask.isTaskOpen" name="is-task-open" value="TRUE">
    <label class="priority-label" for="true">TRUE</label><br>

    <input type="radio" v-model="saveTask.isTaskOpen" name="is-task-open" value="FALSE">
    <label class="priority-label" for="false">FALSE</label><br>

    <label class="user-input" for="started-on">Started on:</label>
    <input class="user-input" type="text" placeholder="Could be:  2022-06-22T23:35:53" name="started-on"
           v-model="saveTask.startedOn">

    <label class="user-input" for="finished-on">Finished on:</label>
    <input class="user-input" type="text" placeholder="Could be: 2022-06-22T23:35:53" name="finished-on"
           v-model="saveTask.finishedOn">

    <label class="user-input" for="priority">Please select your priority:</label>
    <input type="radio" v-model="saveTask.priority" name="priority" value="LOW" checked>
    <label class="priority-label" for="low">LOW</label><br>
    <input type="radio" v-model="saveTask.priority" name="priority" value="MEDIUM">
    <label class="priority-label" for="medium">MEDIUM</label><br>
    <input type="radio" v-model="saveTask.priority" name="priority" value="HIGH">

    <label class="priority-label" for="high">HIGH</label><br>
    <label>
      <input type="checkbox" name="reminder" v-model="saveTask.isReminderSet"> Set reminder
    </label>

    <button class="submit-btn">Submit</button>
  </form>

</template>

<script lang="ts" setup>
import {useSavedTask} from "@/stores/useSavedTask";
import {storeToRefs} from "pinia";
import router from "@/router";
import TaskApi from "@/services/TaskApi";
import {TaskRequest} from "@/types/TaskRequest";
import {reactive} from "vue";

const selectedTask = useSavedTask();
const {saveTask} = storeToRefs(selectedTask);
let myTask: TaskRequest;

const onSubmit = async (e: Event) => {

  myTask = reactive({
    description: saveTask.value.description,
    createdOn: saveTask.value.createdOn,
    timeInterval: saveTask.value.timeInterval,
    priority: saveTask.value.priority,
    finishedOn: saveTask.value.finishedOn,
    id: saveTask.value.id,
    isReminderSet: saveTask.value.isReminderSet,
    isTaskOpen: saveTask.value.isTaskOpen,
    startedOn: saveTask.value.startedOn,
    timeTaken: saveTask.value.timeTaken
  })

  e.preventDefault()
  if (!myTask.description) {
    alert('Please add a task')
    return
  }
  return await TaskApi.updateTask(myTask.id, myTask).then(() => {
    router.push('/')
  });
}

</script>

<style scoped>
</style>