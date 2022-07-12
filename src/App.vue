<template>
  <nav class="navbar navbar-expand-lg" style="background-color: #56BEE4;">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img src="../src/assets/logo_getthingdone.png" alt="get_things_done logo" width="344"
             height="100"
             class="d-inline-block align-text-top">
      </router-link>
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

nav a {
  font-weight: bold;
  color: white;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
  margin: 10px;
}

nav a.router-link-exact-active {
  color: white;
  background: black;
}

</style>
<script>
export default {}
</script>