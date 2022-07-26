<template>
  <h1>Edit Task</h1>
  <form class="form-inline" @submit="onSubmit">
    <label class="user-input" for="task">Task:</label>
    <input class="user-input" type="text" placeholder="Could be: Feed the cat.." name="description"
           v-model="saveTask.description">
    <label class="user-input" for="time-interval">Created on:</label>
    <input class="user-input" type="text" placeholder="Could be: 2022-06-22T23:35:53" name="time_interval"
           v-model="saveTask.createdOn">
    <label class="user-input" for="time-interval">Time Interval:</label>
    <input class="user-input" type="text" placeholder="Could be: 24h" name="time_interval"
           v-model="saveTask.timeInterval">
    <label class="user-input" for="time-taken">Time Taken:</label>
    <input class="user-input" type="number" placeholder="Could be: 0" name="time_taken" v-model="saveTask.timeTaken">

    <label class="user-input" for="is-task-open">Is task still open?</label>

    <input type="radio" v-model="saveTask.isTaskOpen" name="is-task-open" value="TRUE" checked>
    <label class="priority-label" for="true">TRUE</label><br>

    <input type="radio" v-model="saveTask.isTaskOpen" name="is-task-open" value="FALSE">
    <label class="priority-label" for="false">FALSE</label><br>

    <label class="user-input" for="time-interval">Started on:</label>
    <input class="user-input" type="text" placeholder="Could be:  2022-06-22T23:35:53" name="time_interval"
           v-model="saveTask.startedOn">
    <label class="user-input" for="time-interval">Finished on:</label>
    <input class="user-input" type="text" placeholder="Could be: 2022-06-22T23:35:53" name="time_interval"
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

function setPropertiesBlank() {
  myTask.description = '';
  myTask.timeInterval = '';
  myTask.timeTaken = 0;
  myTask.isReminderSet = false;
}

const onSubmit = async (e: Event) => {

  myTask = reactive({
    description: saveTask.value.description,
    createdOn: saveTask.value.createdOn,
    timeInterval: saveTask.value.timeInterval,
    priority: saveTask.value.priority,
    finishedOn: saveTask.value.finishedOn,
    id: saveTask.value.id,
    isReminderSet: saveTask.value.isReminderSet,
    isTaskOpen:  saveTask.value.isTaskOpen,
    startedOn: saveTask.value.startedOn,
    timeTaken: saveTask.value.timeTaken
  })

  console.log(myTask);
  e.preventDefault()
  if (!myTask.description) {
    alert('Please add a task')
    return
  }
  return  await TaskApi.updateTaskWithObject(myTask).then(() => {
    console.log(myTask);
    setPropertiesBlank();
    router.push('/')
  });
}

/*
    isTaskOpen: boolean
 */
</script>

<style scoped>

.form-inline {
  display: flex;
  flex-flow: row wrap;
  flex-direction: column;
  align-items: stretch;
  margin: 0.5rem auto;
}

.form-inline label {
  margin: 5px auto 5px auto;
  display: inline-block;
}

.form-inline input {
  vertical-align: middle;
  margin: 5px auto 5px auto;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ddd;
  display: inline-block;
}

.user-input {
  width: 50%;
}

.submit-btn {
  padding: 10px 20px;
  background-color: dodgerblue;
  border: 1px solid #ddd;
  color: white;
  cursor: pointer;
  display: flex;
  margin: 0 auto;
  width: 20%;
  text-align: center;
  justify-content: center;
}

.priority-label {
  float: left !important;
  display: flex !important;
}


.form-inline button:hover {
  background-color: royalblue;
}

@media (max-width: 800px) {
  .form-inline input {
    margin: 10px auto;
  }

  .user-input {
    width: 90%;
  }

  .submit-btn {
    padding: 10px 20px;
    background-color: dodgerblue;
    border: 1px solid #ddd;
    color: white;
    cursor: pointer;
    max-width: 90%;
    text-align: center;
    margin: 0 auto;
    width: 90%;
    justify-content: center;
  }
}

</style>