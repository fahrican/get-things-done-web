<template>
  <h1>All Open Tasks</h1>
  <p>{{ quote }}</p>
<!--  <button @click="createTask">create task</button>
  <button @click="createPost">create post</button>-->
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import TaskApi from "@/services/TaskApi";


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

/*    const createTask = () => {
      axios.post('http://localhost:8080/api/create',
          JSON.stringify({
            description: "Create WEB FE",
            is_reminder_set: false,
            is_task_open: true,
            created_on: "2022-06-22T23:35:53",
            time_interval: "24h",
            time_taken: 0
          })).then(response => {
        console.log(response);
      })
    }

    const createPost = () => {
      axios.post('https://jsonplaceholder.typicode.com/posts',
          JSON.stringify({
            userId: 1,
            title: 'test',
            description: 'test desc'
          })).then(response => {
        console.log(response);
      })
    }*/

    /*

        axios.get('http://localhost:8080/api/open-tasks').then(response => {
          quote.value = response.data[0]
          console.log(quote.value);
        });
    */

    return {quote}
  }
});
</script>

<style scoped>

</style>