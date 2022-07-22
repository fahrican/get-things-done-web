<template>
  <header>
    <el-menu
        class="el-menu-demo"
        mode="horizontal"
        :ellipsis="false"
    >
      <el-menu-item index="0">
        <router-link class="logo" to="/">
          <img src="../src/assets/logo_getthingdone.png" alt="get_things_done logo" width="180"
               height="50">
        </router-link>
      </el-menu-item>
      <div class="flex-grow"/>
      <el-menu-item index="1">
        <router-link :to="{name: 'open-tasks'}">Open Tasks</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link :to="{name: 'closed-tasks'}">Closed Tasks</router-link>
      </el-menu-item>
      <el-menu-item index="3">
        <router-link :to="{name: 'all-tasks'}">All Tasks</router-link>
      </el-menu-item>
    </el-menu>
  </header>
  <router-view/>
</template>


<style scoped>

.flex-grow {
  flex-grow: 1;
}
</style>