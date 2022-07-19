<template>
  <div :key="task.id" v-for="task in tasks">
    <Task
        @toggle-reminder="toggleReminder"
        @delete-task="deleteTask"
        :task="task"/>
  </div>
</template>

<script lang="ts">
import Task from './Task.vue';
import {defineComponent} from "vue";
import {TaskRequest} from "@/types/TaskRequest";
import TaskApi from "@/services/TaskApi";


export default defineComponent({
  name: "TasksComponent",
  emits: ["delete-task", "toggle-reminder"],
  components: {
    Task
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
    this.tasks = await this.fetchOpenTasks();
  },
  methods: {
    async toggleReminder1(id: number): Promise<void> {
      const taskToToggle = await this.fetchTask(id);
      const updateTask = {...taskToToggle, reminder: !taskToToggle.reminder};
      const res = await fetch(`http://localhost:3000/tasks/${id}`, {
        method: 'PUT',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(updateTask)
      });

      const data = await res.json();

      this.tasks = this.tasks.map((task) => task.id === id ? {
        ...task,
        reminder: data.reminder
      } : task);
    },
    async toggleReminder(id: number): Promise<void> {
      const taskToToggle = await this.fetchTask(id);
      console.log(taskToToggle);
      const updateTask: TaskRequest = {
        description: "meet Stefan",
        createdOn: "2022-06-24T23:12:53",
        timeInterval: "7d",
        priority: 1,
        finishedOn: "",
        id: 0,
        isReminderSet: false,
        isTaskOpen: true,
        startedOn: "",
        timeTaken: 0
      };
      console.log(updateTask);
      const res = await TaskApi.updateTaskWithUri(id, updateTask)
      console.log('response: ');
      console.log(res);

      const data = await res.data
      console.log(data);

      this.tasks = this.tasks.map((task) => task.id === id ? {
        ...task,
        reminder: data.reminder
      } : task);
    },

    async fetchTask(id: number) {
      const res = await TaskApi.getTask(id);
      return res.data
    },
    async deleteTask(id: number): Promise<void> {
      if (confirm('Are you sure, you want to delete?')) {
        const res = await TaskApi.deleteTask(id);

        res.status === 200
            ? (this.tasks = this.tasks.filter((task) => task.id !== id))
            : alert('Error while deleting task');
      }
    },
    async fetchOpenTasks() {
      try {
        const response = await TaskApi.getOpenTasks();
        return response.data
      } catch (err) {
        console.log('error loadQuote: ' + err)
      }
    },
  }
});
</script>

<style scoped>

</style>