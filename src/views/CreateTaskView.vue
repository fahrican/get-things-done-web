<template>
  <form @submit="onSubmit" class="add-form">
    <div class="form-control">
      <label>Task</label>
      <input type="text" v-model="myTask.description" name="text" placeholder="Add Task"/>
    </div>
    <div class="form-control">
      <label>Time Interval</label>
      <input type="text" v-model="myTask.time_interval" name="time_interval" placeholder="24h"/>
    </div>
    <div class="form-control">
      <label>Time Taken</label>
      <input type="number" v-model="myTask.time_taken" name="time_taken" placeholder="0"/>
    </div>
    <div>
      <p>Please select your priority:</p>

      <input type="radio" v-model="myTask.priority" name="priority" value="LOW" checked>
      <label for="low">LOW</label><br>

      <input type="radio" v-model="myTask.priority" name="priority" value="MEDIUM">
      <label for="medium">MEDIUM</label><br>

      <input type="radio" v-model="myTask.priority" name="priority" value="HIGH">
      <label for="high">HIGH</label><br>
    </div>
    <div class="form-control form-control-check">
      <label>Set Reminder</label>
      <input type="checkbox" v-model="myTask.is_reminder_set" name="reminder"/>
    </div>

    <input type="submit" value="Save Task" class="btn btn-block"/>
  </form>
</template>

<script lang="ts">
import {defineComponent, reactive} from 'vue'
import moment from "moment";
import {MyTask} from "@/types/MyTask";
import TaskApi from "@/services/TaskApi";

export default defineComponent({
  name: "AddTask",
  components: {},
  setup() {

    const myTask: MyTask = reactive({
      description: '',
      is_reminder_set: false,
      created_on: '',
      priority: 0,
      time_interval: '',
      time_taken: 0,
      is_task_open: true,
    })

    function createNewTask(): MyTask {
      return {
        description: myTask.description,
        time_interval: myTask.time_interval,
        time_taken: myTask.time_taken,
        priority: myTask.priority,
        is_reminder_set: myTask.is_reminder_set,
        created_on: getTimestamp(),
        is_task_open: true
      };
    }

    function setPropertiesBlank() {
      myTask.description = '';
      myTask.time_interval = '';
      myTask.time_taken = 0;
      myTask.is_reminder_set = false;
    }

    async function tryPostRequest(newTask: MyTask) {
      try {
        const response = await TaskApi.createTask(newTask)
        console.log(response.data)
        return response.data
      } catch (err) {
        console.log(err)
      }
    }

    const onSubmit = async (e: Event) => {
      e.preventDefault()
      if (!myTask.description) {
        alert('Please add a task')
        return
      }
      const newTask = createNewTask();
      setPropertiesBlank();

      return await tryPostRequest(newTask);
    }


    const getTimestamp = () => {
      // example: "2022-06-22T23:35:53"
      const DATE_TIME_FORMAT = 'YYYY-MM-DDTHH:mm:ss';
      return (moment(new Date())).format(DATE_TIME_FORMAT);
    }

    return {myTask, onSubmit}
  }
});
</script>

<style scoped>
.add-form {
  margin-bottom: 40px;
}

.form-control {
  margin: 20px 0;
}

.form-control label {
  display: block;
}

.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}

.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.form-control-check label {
  flex: 1;
}

.form-control-check input {
  flex: 2;
  height: 20px;
}
</style>