<template>
  <h1>All Tasks</h1>
  <Tasks :task-state="taskState"/>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import Tasks from "@/components/Tasks.vue";
import {TaskState} from "@/types/TaskState";


export default defineComponent({
  name: "AllTasksView",
  components: {
    Tasks
  },
  setup() {
    const taskState = ref(TaskState.ALL)

    return {taskState}
  }
});
</script>

<style scoped>

</style>