<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="../src/assets/logo.png" alt="" width="30"
             height="24"
             class="d-inline-block align-text-top">
        Bootstrap
      </a>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'open-tasks'}">Open Tasks</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'closed-tasks'}">Closed Tasks</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'all-tasks'}">All Tasks</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <router-view/>
</template>

<style scoped>
</style>
