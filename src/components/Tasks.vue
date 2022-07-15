<template>
  <div :key="task.id" v-for="task in tasks">
    <Task @toggle-reminder="$emit('toggle-reminder', task.id)"
          @delete-task="$emit('delete-task', task.id)"
          :task="task"/>
  </div>
</template>

<script lang="ts">
import Task from './Task.vue';
import {defineComponent} from "vue";


export default defineComponent({
  name: "TasksComponent",
  emits: ["delete-task", "toggle-reminder"],
  components: {
    Task
  },
  props: {
    tasks: Array
  },
  methods: {}
});
</script>

<style scoped>

</style>