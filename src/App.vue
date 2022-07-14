<template>
  <header>
    <router-link id="nav-title" to="/">
      <img src="../src/assets/logo_getthingdone.png" alt="get_things_done logo" width="344"
           height="100">
    </router-link>
    <nav>
      <ul>
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
    </nav>
  </header>
</template>

<style scoped>

nav a {
  font-weight: bold;
  color: white;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
  margin: 10px;
  display: flex;
}

nav a.router-link-exact-active {
  color: white;
  background: black;
  display: flex;
}

/* Global */
* {
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica;
}

/* Header */
header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px 50px;
  box-shadow: 0 1px 8px #ddd;
}

#nav-title {
  margin-right: auto;
  font-size: 1.5em;
  display: flex;
}

header li {
  list-style: none;
  display: inline-block;
  padding: 0 20px;
}

header a {
  text-decoration: none;
  color: #555;
  transition: all 0.3s ease 0s;
}

header a:hover {
  color: #b2dfdb;
}
</style>
<script>
export default {}
</script>