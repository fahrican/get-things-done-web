<template>
  <div @dblclick="$emit('toggle-reminder', task.id)" :class="[task.is_reminder_set ? 'reminder' : '', 'task']">
    <h3>{{ task.description }} <i @click="$emit('delete-task', task.id)" class="fas fa-times"/></h3>
    <p>{{ task.created_on }}</p>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "TaskComponent",
  props: {
    task: Object
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