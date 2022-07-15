<template>
  <h1>All Tasks</h1>
  <Tasks
      @delete-task="deleteTask"
      :tasks="tasks"
  />
</template>

<script lang="ts">
import {defineComponent} from "vue";
import TaskApi from "@/services/TaskApi";
import Tasks from "@/components/Tasks.vue";


export default defineComponent({
  name: "AllTasksView",
  components: {
    Tasks
  },
  data() {
    return {
      tasks: Array<{
        id: number;
        description: string;
        is_reminder_set: boolean;
        created_on: string;
        priority: number;
        time_interval: string;
        time_taken: number;
        is_task_open: boolean;
      }>()
    }

  },
  async created() {
    this.tasks = await this.fetchAllTasks();
  },
  methods: {
    async fetchAllTasks() {
      try {
        const response = await TaskApi.getAllTasks()
        return response.data
      } catch (err) {
        console.log('error loadQuote: ' + err)
      }
    },
    async deleteTask(id: number): Promise<void> {
      if (confirm('Are you sure, you want to delete?')) {
        const res = await fetch(`http://localhost:3000/tasks/${id}`, {method: 'DELETE'});

        res.status === 200
            ? (this.tasks = this.tasks.filter((task) => task.id !== id))
            : alert('Error while deleting task');
      }
    },
  }
});
</script>

<style scoped>

</style>