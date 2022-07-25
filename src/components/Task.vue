<template>
  <!--@dblclick="$emit('toggle-reminder', task.id)" :class="[task.isReminderSet ? 'reminder' : '', 'task']"-->
  <!--
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
  -->


  <div class="card">
    <div class="container">
      <h3>
        <router-link @click="storeSelectedTask(task)" to="single-task">{{ task.description }}</router-link>
      </h3>
      <p>createdOn: {{ task.createdOn }}</p>
      <p>time interval: {{ task.timeInterval }}</p>
      <p>priority: {{ task.priority }}</p>
        <i @click="$emit('delete-task', task.id)" class="fas fa-trash"/>
        <router-link @click="storeSelectedTask(task)" to="edit-task"><i class="fas fa-edit"/></router-link>
    </div>
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

<style lang="scss">

.fas.fa-trash {
  color: red;
  margin-left: 2.5rem;
  margin-right: 2.5rem;
  margin-top: 0.5rem;
  border-bottom: 0.5rem;
}

.fas.fa-edit {
  color: blue;
  margin-left: 2.5rem;
  margin-right: 2.5rem;
  margin-top: 0.5rem;
  border-bottom: 0.5rem;
}

h3 {
  margin: 0.5rem;
}

p {
  margin: 0.5rem;
}

.container {
  padding: 10px 32px;
  max-width: 1140px;
  margin: 2rem auto;
  text-align: center;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 70%;
  border-radius: 10px;
  margin: 0 auto;
  @media (max-width: 600px) {
    width: 90%;
  }
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

img {
  border-radius: 10px 10px 0 0;
}


</style>