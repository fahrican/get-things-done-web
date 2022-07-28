<template>
  <div :key="task.id" v-for="task in tasks">
    <TaskComponent
        @delete-task="deleteTask"
        :task="task"/>
  </div>
</template>

<script lang="ts">
import TaskComponent from './TaskComponent.vue';
import {defineComponent, PropType} from "vue";
import TaskApi from "@/services/TaskApi";
import {TaskState} from "@/types/TaskState";


export default defineComponent({
  name: "TasksComponent",
  emits: ["delete-task", "toggle-reminder"],
  components: {
    TaskComponent
  },
  props: {
    taskState: {
      type: Object as PropType<TaskState>,
      required: true
    }
  },
  data() {
    return {
      tasks: Array<{
        id: number
        description: string
        isReminderSet: boolean
        createdOn: string
        startedOn: string
        finishedOn: string
        priority: number
        timeInterval: string
        timeTaken: number
        isTaskOpen: boolean
      }>()
    }
  },
  async created() {
    this.tasks = await this.fetchTasks();
  },
  methods: {
    async deleteTask(id: number): Promise<void> {
      if (confirm('Are you sure, you want to delete?')) {
        const res = await TaskApi.deleteTask(id);

        res.status === 200
            ? (this.tasks = this.tasks.filter((task) => task.id !== id))
            : alert('Error while deleting task');
      }
    },
    async fetchTasks() {
      try {
        this.tasks = [];
        let response = null;
        if (this.taskState === TaskState.OPEN) {
          response = await TaskApi.getOpenTasks();
        } else if (this.taskState === TaskState.CLOSED) {
          response = await TaskApi.getClosedTasks();
        } else if (this.taskState === TaskState.ALL) {
          response = await TaskApi.getAllTasks();
        }
        return response?.data
      } catch (err) {
        console.log('error loadQuote: ' + err)
      }
    },
  }
});
</script>

<style scoped>

</style>