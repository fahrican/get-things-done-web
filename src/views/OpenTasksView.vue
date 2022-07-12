<template>
  <h1>All Open Tasks</h1>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "OpenTasksView",
  async created() {
    const result = await this.fetchTasks();
    console.log('tasks: ' + result)
  },
  methods: {
    async fetchTasks() {
      const res = await fetch('http://localhost:8080/api/open-tasks');
      return res.json();
    }
  }
});
</script>

<style scoped>

</style>