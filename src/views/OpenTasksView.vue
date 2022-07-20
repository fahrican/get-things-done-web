<template>
  <h1>Open Tasks</h1>
  <Tasks :task-state="taskState"/>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import Tasks from "@/components/Tasks.vue";
import {TaskState} from "@/types/TaskState";


export default defineComponent({
  name: "OpenTasksView",
  components: {
    Tasks
  },
  data() {
    return {
      taskState: TaskState.OPEN
    }
  }
});
</script>

<style scoped>

</style>