<template>
  <form class="form-inline" @submit="onSubmit">
    <label class="user-input" for="task">Task:</label>
    <input class="user-input" type="text" placeholder="Feed the cat.." name="description" v-model="myTask.description">
    <label class="user-input" for="time-interval">Time Interval:</label>
    <input class="user-input" type="text" placeholder="24h" name="time_interval" v-model="myTask.timeInterval">
    <label class="user-input" for="time-taken">Time Taken:</label>
    <input class="user-input" type="number" placeholder="0" name="time_taken" v-model="myTask.timeTaken">

    <label class="user-input" for="priority">Please select your priority:</label>

    <input type="radio" v-model="myTask.priority" name="priority" value="LOW" checked>
    <label class="priority-label" for="low">LOW</label><br>

    <input type="radio" v-model="myTask.priority" name="priority" value="MEDIUM">
    <label class="priority-label" for="medium">MEDIUM</label><br>

    <input type="radio" v-model="myTask.priority" name="priority" value="HIGH">
    <label class="priority-label" for="high">HIGH</label><br>
    <label>
      <input type="checkbox" name="reminder" v-model="myTask.isReminderSet"> Set reminder
    </label>
    <button class="submit-btn">Submit</button>
  </form>

</template>

<script lang="ts" setup>
import {reactive} from 'vue'
import moment from "moment";
import TaskApi from "@/services/TaskApi";
import {TaskRequest} from "@/types/TaskRequest";
import router from "@/router";

const myTask: TaskRequest = reactive({
  description: "",
  createdOn: "",
  timeInterval: "",
  priority: 0,
  finishedOn: "",
  id: 0,
  isReminderSet: false,
  isTaskOpen: true,
  startedOn: "",
  timeTaken: 0
})

function createNewTask(): TaskRequest {
  return {
    description: myTask.description,
    timeInterval: myTask.timeInterval,
    timeTaken: myTask.timeTaken,
    priority: myTask.priority,
    isReminderSet: myTask.isReminderSet,
    createdOn: getTimestamp(),
    isTaskOpen: true,
    finishedOn: "",
    id: 0,
    startedOn: "",
  };
}

function setPropertiesBlank() {
  myTask.description = '';
  myTask.timeInterval = '';
  myTask.timeTaken = 0;
  myTask.isReminderSet = false;
}

async function tryPostRequest(newTask: TaskRequest) {
  try {
    const response = await TaskApi.createTask(newTask)
    return response.data
  } catch (err) {
    console.log(err)
  }
}

const onSubmit = async (e: Event) => {
  e.preventDefault()
  if (!myTask.description) {
    alert('Please add a task')
    return
  }
  const newTask = createNewTask();
  setPropertiesBlank();
  return await tryPostRequest(newTask).then(() => {
    router.push('/')
  })
}

const getTimestamp = () => {
  // example: "2022-06-22T23:35:53"
  const DATE_TIME_FORMAT = 'YYYY-MM-DDTHH:mm:ss';
  return (moment(new Date())).format(DATE_TIME_FORMAT);
}

</script>

<style scoped>
</style>