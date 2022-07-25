<template>
  <!--  <form @submit="onSubmit" class="add-form">
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
    </form>-->

  <form class="form-inline" @submit="onSubmit">
    <label class="user-input" for="task">Task:</label>
    <input class="user-input" type="text" placeholder="Feed the cat.." name="description" v-model="myTask.description">
    <label class="user-input" for="time-interval">Time Interval:</label>
    <input class="user-input" type="text" placeholder="24h" name="time_interval" v-model="myTask.timeInterval">
    <label class="user-input" for="time-taken">Time Taken:</label>
    <input class="user-input" type="number" placeholder="0" name="time_taken" v-model="myTask.timeTaken">

    <label class="user-input" for="priority">Please select your priority:</label>

    <input type="radio" v-model="myTask.priority" name="priority" value="LOW" checked>
    <label class="priority-label" for="low">LOW</label><br>

    <input type="radio" v-model="myTask.priority" name="priority" value="MEDIUM">
    <label class="priority-label" for="medium">MEDIUM</label><br>

    <input type="radio" v-model="myTask.priority" name="priority" value="HIGH">
    <label class="priority-label" for="high">HIGH</label><br>
    <label>
      <input type="checkbox" name="reminder" v-model="myTask.isReminderSet"> Set reminder
    </label>
    <button class="submit-btn">Submit</button>
  </form>

</template>

<script lang="ts">
import {defineComponent, reactive} from 'vue'
import moment from "moment";
import TaskApi from "@/services/TaskApi";
import {TaskRequest} from "@/types/TaskRequest";
import router from "@/router";

export default defineComponent({
  name: "AddTask",
  components: {},
  setup() {

    const myTask: TaskRequest = reactive({
      description: "",
      createdOn: "",
      timeInterval: "",
      priority: 0,
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
      return await tryPostRequest(newTask).then(() => {
        router.push('/')
      })
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
/*

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
*/
.form-inline {
  display: flex;
  flex-flow: row wrap;
  flex-direction: column;
  align-items: stretch;
  margin: 0.5rem auto;
}

.form-inline label {
  margin: 5px auto 5px auto;
  display: inline-block;
}

.form-inline input {
  vertical-align: middle;
  margin: 5px auto 5px auto;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ddd;
  display: inline-block;
}

.user-input {
  width: 50%;
}

.submit-btn {
  padding: 10px 20px;
  background-color: dodgerblue;
  border: 1px solid #ddd;
  color: white;
  cursor: pointer;
  display: flex;
  margin: 0 auto;
  width: 20%;
  text-align: center;
  justify-content: center;
}

.priority-label {
  float: left !important;
  display: flex !important;
}


.form-inline button:hover {
  background-color: royalblue;
}

@media (max-width: 800px) {
  .form-inline input {
    margin: 10px auto;
  }

  .user-input {
    width: 90%;
  }

  .submit-btn {
    padding: 10px 20px;
    background-color: dodgerblue;
    border: 1px solid #ddd;
    color: white;
    cursor: pointer;
    max-width: 90%;
    text-align: center;
    margin: 0 auto;
    width: 90%;
    justify-content: center;
  }

}

</style>