<template>
  <!--@dblclick="$emit('toggle-reminder', task.id)" :class="[task.isReminderSet ? 'reminder' : '', 'task']"-->
  <div class="task">
    <h3>
      <router-link @click="storeSelectedTask(task)" to="single-task">{{ task.description }}</router-link>
      <i @click="$emit('delete-task', task.id)" class="fas fa-times"/>
      <router-link @click="storeSelectedTask(task)" to="edit-task"><i class="fas fa-edit"/></router-link>
    </h3>
    <p>createdOn: {{ task.createdOn }}</p>
    <p>time interval: {{ task.timeInterval }}</p>
    <p>priority: {{ task.priority }}</p>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import {TaskRequest} from "@/types/TaskRequest";
import {useSavedTask} from "@/stores/useSavedTask";


export default defineComponent({
  name: "TaskComponent",
  props: {
    task: Object as PropType<TaskRequest>
  },
  setup() {
    const selectedTask = useSavedTask();

    const storeSelectedTask = (task: TaskRequest) => selectedTask.storeTask(task);

    return {storeSelectedTask}
  }
});
</script>

<style scoped>
.fas.fa-times {
  color: red;
}

.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.task.reminder {
  border-left: 5px solid green;
}

.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>