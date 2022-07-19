<template>
  <form @submit="onSubmit" class="add-form">
    <div class="form-control">
      <label>Task</label>
      <input type="text" v-model="myTask.description" name="text" placeholder="Add Task"/>
    </div>
    <div class="form-control">
      <label>Time Interval</label>
      <input type="text" v-model="myTask.timeInterval" name="time_interval" placeholder="24h"/>
    </div>
    <div class="form-control">
      <label>Time Taken</label>
      <input type="number" v-model="myTask.timeTaken" name="time_taken" placeholder="0"/>
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
      <input type="checkbox" v-model="myTask.isReminderSet" name="reminder"/>
    </div>

    <input type="submit" value="Save Task" class="btn btn-block"/>
  </form>
</template>

<script lang="ts">
import {defineComponent, reactive} from 'vue'
import moment from "moment";
import TaskApi from "@/services/TaskApi";
import {TaskRequest} from "@/types/TaskRequest";

export default defineComponent({
  name: "AddTask",
  components: {},
  setup() {

    const myTask: TaskRequest = reactive({
      description: "",
      createdOn: "",
      timeInterval: "",
      priority: 1,
      finishedOn: "",
      id: 0,
      isReminderSet: false,
      isTaskOpen: true,
      startedOn: "",
      timeTaken: 0
    })

    function createNewTask(): TaskRequest {
      return {
        description: myTask.description,
        timeInterval: myTask.timeInterval,
        timeTaken: myTask.timeTaken,
        priority: myTask.priority,
        isReminderSet: myTask.isReminderSet,
        createdOn: getTimestamp(),
        isTaskOpen: true,
        finishedOn: "",
        id: 0,
        startedOn: "",
      };
    }

    function setPropertiesBlank() {
      myTask.description = '';
      myTask.timeInterval = '';
      myTask.timeTaken = 0;
      myTask.isReminderSet = false;
    }

    async function tryPostRequest(newTask: TaskRequest) {
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