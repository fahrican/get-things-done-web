<template>
  <h1>Closed Tasks</h1>
  <Tasks :task-state="taskState"/>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import Tasks from "@/components/Tasks.vue";
import {TaskState} from "@/types/TaskState";

export default defineComponent({
  name: "ClosedTasksView",
  components: {
    Tasks
  },
  data() {
    return {
      taskState: TaskState.CLOSED
    }
  }
});
</script>

<style scoped>

</style>