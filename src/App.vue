<template>
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
    </nav>
  </header>
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
  color: #56BEE4;
}

.menu,
.submenu {
  list-style-type: none;
}


/* Tablet menu */
@media all and (min-width: 700px) {
  .menu {
    justify-content: center;
  }

  .logo {
    flex: 1;
  }
}


/* Desktop menu */
@media all and (min-width: 960px) {
  .menu {
    align-items: flex-start;
    flex-wrap: nowrap;
    background: none;
  }

  .logo {
    order: 0;
  }
}


/* Mobile menu */
.menu {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.menu li a {
  display: block;
  padding: 15px 5px;
}

.menu li router-link {
  display: block;
  padding: 15px 5px;
}

.menu li.subitem a {
  padding: 15px;
}

/* Button up from tablet screen */
.menu li.button a {
  padding: 10px 15px;
  margin: 5px 0;
}

</style>
