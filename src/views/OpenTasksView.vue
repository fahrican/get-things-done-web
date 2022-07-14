<template>
  <h1>All Open Tasks</h1>
  <p>{{ quote }}</p>
  <button @click="createTask">create task</button>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import TaskApi from "@/services/TaskApi";
import Task from "@/types/Task";


export default defineComponent({
  name: "OpenTasksView",
  setup() {

    const quote = ref('');

    const loadQuote = async () => {
      try {
        const response = await TaskApi.getTasks();
        quote.value = response.data[0].description
        console.log(response.data);
      } catch (err) {
        console.log('error loadQuote: ' + err)
      }
    }

    loadQuote()

    const createTask = async () => {
      try {
        const task: Task = {
          description: "Look at Vuetify5",
          is_reminder_set: false,
          is_task_open: true,
          created_on: "2022-06-22T23:35:53",
          time_interval: "24h",
          time_taken: 0,
          priority: 1
        }
        const response = await TaskApi.createTask(task)
        console.log(response)
      } catch (err) {
        console.log('error createTask: ' + err)
      }
    }

    return {quote, createTask}
  }
});
</script>

<style scoped>

</style>