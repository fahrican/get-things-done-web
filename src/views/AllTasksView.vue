<template>
  <h1>All Tasks</h1>
  <Tasks :task-state="taskState"/>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import Tasks from "@/components/Tasks.vue";
import {TaskState} from "@/types/TaskState";


export default defineComponent({
  name: "AllTasksView",
  components: {
    Tasks
  },
  data() {
    return {
      taskState: TaskState.ALL
    }
  }
});
</script>

<style scoped>

</style>