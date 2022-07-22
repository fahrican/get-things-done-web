<template>
  <form @submit="onSubmit" class="add-form">
    <div class="form-control">
      <label>Task</label>
      <input type="text" v-model="myTask.description" name="text" placeholder="Add Task"/>
    </div>
    <div class="form-control">
      <label>Time Interval</label>
      <input type="text" v-model="myTask.timeInterval" name="time_interval" placeholder="24h"/>
    </div>
    <div class="form-control">
      <label>Time Taken</label>
      <input type="number" v-model="myTask.timeTaken" name="time_taken" placeholder="0"/>
    </div>
    <div>
      <p>Please select your priority:</p>

      <input type="radio" v-model="myTask.priority" name="priority" value="LOW" checked>
      <label for="low">LOW</label><br>

      <input type="radio" v-model="myTask.priority" name="priority" value="MEDIUM">
      <label for="medium">MEDIUM</label><br>

      <input type="radio" v-model="myTask.priority" name="priority" value="HIGH">
      <label for="high">HIGH</label><br>
    </div>
    <div class="form-control form-control-check">
      <label>Set Reminder</label>
      <input type="checkbox" v-model="myTask.isReminderSet" name="reminder"/>
    </div>

    <input type="submit" value="Save Task" class="btn btn-block"/>
  </form>
</template>

<script lang="ts" setup>
import {TaskRequest} from "@/types/TaskRequest";
import {reactive} from "vue";

const myTask: TaskRequest = reactive({
  description: "",
  createdOn: "",
  timeInterval: "",
  priority: 1,
  finishedOn: "",
  id: 0,
  isReminderSet: false,
  isTaskOpen: true,
  startedOn: "",
  timeTaken: 0
})

</script>

<style scoped>

</style>