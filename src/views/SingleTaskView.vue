<template>
  <h1>Single Task</h1>
  <h4>{{ saveTask.description }}</h4>
  <p>createdOn: {{ saveTask.createdOn }}</p>
  <p>time interval: {{ saveTask.timeInterval }}</p>
  <p>priority: {{ saveTask.priority }}</p>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {storeToRefs, mapActions} from "pinia";
import {useSavedTask} from "@/stores/useSavedTask";


export default defineComponent({
  name: "SingleTaskView",
  components: {},
  setup() {
    const selectedTask = useSavedTask();
    const {saveTask} = storeToRefs(selectedTask);
    console.log('SingleTaskView');
    console.log(saveTask);

    return {saveTask}
  }
})
</script>

<style scoped>

</style>