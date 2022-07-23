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

.app {
  min-height: 100vh;
  position: relative;
  background-color: #f1f1f1;
}

.container {
  padding: 0 20px;
  max-width: 1140px;
  margin: 0 auto;
}
</style>
