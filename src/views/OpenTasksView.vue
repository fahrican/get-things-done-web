<template>
  <h1>All Open Tasks</h1>
  <Tasks
      @toggle-reminder="toggleReminder"
      @delete-task="deleteTask"
      :tasks="tasks"
  />
</template>

<script lang="ts">
import {defineComponent} from "vue";
import TaskApi from "@/services/TaskApi";
import Tasks from "@/components/Tasks.vue";
import {TaskRequest} from "@/types/TaskRequest";


export default defineComponent({
  name: "OpenTasksView",
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
    this.tasks = await this.fetchOpenTasks();
  },
  /*  setup() {

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
          const task: CreateTaskRequest = {
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
    },*/
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