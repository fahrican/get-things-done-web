<!--<template>
  <header>
    <router-link class="logo" to="/">
      <img src="../src/assets/logo_getthingdone.png" alt="get_things_done logo" width="344"
           height="100">
    </router-link>
    <nav>
      <ul class="menu">
        <li>
          <router-link :to="{name: 'open-tasks'}">Open Tasks</router-link>
        </li>
        <li>
          <router-link :to="{name: 'closed-tasks'}">Closed Tasks</router-link>
        </li>
        <li>
          <router-link :to="{name: 'all-tasks'}">All Tasks</router-link>
        </li>
      </ul>
      <button>
        <router-link :to="{name: 'create-task'}">Create Task</router-link>
      </button>
    </nav>
  </header>
  <router-view/>
</template>-->

<template>
  <NavigationComponent/>
  <router-view/>
</template>

<script lang="ts" setup>
import NavigationComponent from "@/components/NavigationComponent.vue";

</script>

<style lang="scss">
@import url("http://fonts.googleapis.com/css?family=Raleway:400,100,200,300,500,600,800,700,900");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
}

h1 {
  text-align: center;
}

.app {
  min-height: 100vh;
  position: relative;
  background-color: #f1f1f1;
}

/* CSS for EditTask & CreateTask */

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

/* CSS for EditTask & CreateTask */

</style>
