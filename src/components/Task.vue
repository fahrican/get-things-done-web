<template>
  <!--@dblclick="$emit('toggle-reminder', task.id)" :class="[task.isReminderSet ? 'reminder' : '', 'task']"-->
  <div class="task">
    <h3>
      <router-link @click="storeSelectedTask(task)" to="single-task">{{ task.description }}</router-link>
      <i @click="$emit('delete-task', task.id)" class="fas fa-times"/></h3>
    <p>createdOn: {{ task.createdOn }}</p>
    <p>time interval: {{ task.timeInterval }}</p>
    <p>priority: {{ task.priority }}</p>
    <p>name: {{ name }}</p>
    <p>counter: {{ counter }}</p>
    <button @click="clearVal">click</button>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import {TaskRequest} from "@/types/TaskRequest";
import {storeToRefs, mapActions} from "pinia";
import {useCounterStore} from "@/stores/useCounter";
import {useSavedTask} from "@/stores/useSavedTask";


export default defineComponent({
  name: "TaskComponent",
  props: {
    task: Object as PropType<TaskRequest>
  },
  setup() {
    const main = useCounterStore();
    const {counter, name, doubleCount} = storeToRefs(main);

    const selectedTask = useSavedTask();

    const clearVal = () => {
      main.$state = {counter: 123, name: 'jacko'};
    }

    const storeSelectedTask = (task: TaskRequest) => {
      selectedTask.storeTask(task);
      console.log('success Pinia storing');
      console.log(selectedTask.$state);
    }

    return {counter, name, doubleCount, clearVal, storeSelectedTask}
  }
});
</script>

<style scoped>
.fas {
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