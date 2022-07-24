<template>
  <h1>Open Tasks</h1>
  <Tasks :task-state="taskState"/>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import Tasks from "@/components/Tasks.vue";
import {TaskState} from "@/types/TaskState";


export default defineComponent({
  name: "OpenTasksView",
  components: {
    Tasks
  },
  setup() {
    const taskState = ref(TaskState.OPEN)

    return {taskState}
  }
});
</script>

<style lang="scss" scoped>
</style>
