<template>
  <h1>Single Task</h1>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import Task from "@/components/Task.vue";
import {TaskRequest} from "@/types/TaskRequest";

export default defineComponent({
  name: "SingleTaskView",
  components: {
    Task
  },
  data () {
    return {
    }
  }
})
</script>

<style scoped>

</style>