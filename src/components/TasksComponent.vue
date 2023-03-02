<template>
  <div :key="task.id" v-for="task in tasks">
    <TaskComponent
        @delete-task="deleteTask"
        :task="task"/>
  </div>
</template>

<script lang="ts" setup>
import TaskComponent from './TaskComponent.vue';
import {PropType, defineEmits, reactive, defineProps} from "vue";
import TaskApi from "@/services/TaskApi";
import {TaskState} from "@/types/TaskState";
import {TaskRequest} from "@/types/TaskRequest";


defineEmits(["delete-task"]);

const props = defineProps({
  taskState: Object as PropType<TaskState>
});

let tasks = reactive<TaskRequest[]>([])

const deleteTask = async (id: number) => {
  if (confirm('Are you sure, you want to delete?')) {
    const res = await TaskApi.deleteTask(id);

    res.status === 200
        ? (tasks = tasks.filter((task) => task.id !== id))
        : alert('Error while deleting task');

    window.location.reload();
  }
}

async function fetchTasks() {
  try {
    let response = null;
    if (props.taskState === TaskState.OPEN) {
      response = await TaskApi.getTasks('open');
    } else if (props.taskState === TaskState.CLOSED) {
      response = await TaskApi.getTasks('closed');
    } else if (props.taskState === TaskState.ALL) {
      response = await TaskApi.getTasks('');
    }
    response?.data.forEach((task: TaskRequest) => tasks.push(task));
  } catch (err) {
    console.log('error loadQuote: ' + err)
  }
}

fetchTasks()

</script>

<style scoped>

</style>