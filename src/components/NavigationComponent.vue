<template>
  <header :class="{'scrolled-nav': scrolledNav}">
    <nav>
      <div class="branding">
        <img src="@/assets/logo_getthingdone.svg" alt="logo"/>
      </div>
      <ul v-show="!mobile" class="navigation">
        <li>
          <router-link class="link" :to="{name: 'open-tasks'}">Open Tasks</router-link>
        </li>
        <li>
          <router-link class="link" :to="{name: 'closed-tasks'}">Closed Tasks</router-link>
        </li>
        <li>
          <router-link class="link" :to="{name: 'all-tasks'}">All Tasks</router-link>
        </li>
      </ul>
      <div class="icon">
        <i @click="toggleMobileNav" v-show="mobile" class="fas fa-bars" :class="{'icon-active': mobileNav}"></i>
      </div>
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li>
            <router-link class="link" :to="{name: 'open-tasks'}">Open Tasks</router-link>
          </li>
          <li>
            <router-link class="link" :to="{name: 'closed-tasks'}">Closed Tasks</router-link>
          </li>
          <li>
            <router-link class="link" :to="{name: 'all-tasks'}">All Tasks</router-link>
          </li>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<script lang="ts" setup>

import {onMounted, ref} from "vue";

const scrolledNav = ref();
const mobile = ref(true);
const mobileNav = ref(false);
const windowWidth = ref();

function toggleMobileNav() {
  mobileNav.value = !mobileNav.value
}

function checkScreen() {
  windowWidth.value = window.innerWidth;
  if (windowWidth.value <= 750) {
    mobile.value = true;
    return;
  }
  mobile.value = false;
  mobileNav.value = false;
  return;
}

function updateScroll() {
  const scrollPosition = window.scrollY;
  if (scrollPosition > 50) {
    scrolledNav.value = true;
    return;
  }
  scrolledNav.value = false;
}

window.addEventListener("resize", checkScreen);
checkScreen();

onMounted(() => {
  window.addEventListener("scroll", updateScroll)
})

</script>

<style lang="scss" scoped>

header {
  background-color: #378396;
  z-index: 99;
  width: 100%;
  transition: 0.5s ease all;
  color: white;
  margin-bottom: 0.5rem;

  nav {
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 12px 0;
    transition: 0.5s ease all;
    width: 90%;
    margin: 0 auto;
    @media (min-width: 1140px) {
      max-width: 1140px;
    }
  }

  ul,
  .link {
    font-weight: 500;
    color: white;
    list-style: none;
    text-decoration: none;
  }

  li {
    text-transform: uppercase;
    padding: 16px;
    margin-left: 16px;
  }

  .link {
    font-size: 14px;
    transition: 0.5s ease all;
    padding-bottom: 4px;
    border-bottom: 1px solid transparent;

    &:hover {
      color: black;
      background-color: white;
    }
  }

  .branding {
    display: flex;
    align-items: center;

    img {
      width: 300px;
      height: 100px;
      transition: 0.5s ease all;
    }
  }

  .navigation {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: flex-end;
  }

  .icon {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    right: 24px;
    height: 100%;

    i {
      cursor: pointer;
      font-size: 24px;
      transition: 0.8s ease all;
    }
  }

  .icon-active {
    transform: rotate(180deg);
  }

  .dropdown-nav {
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 100%;
    max-width: 250px;
    height: 100%;
    background-color: white;
    top: 0;
    left: 0;

    li {
      margin-left: 0;

      .link {
        color: black;
      }
    }
  }

  .mobile-nav-enter-active,
  .mobile-nav-leave-active {
    transition: 1s ease all;
  }

  .mobile-nav-enter-from,
  .mobile-nav-leave-to {
    transform: translateX(-250px);
  }

  .mobile-nav-enter-to {
    transform: translateX(0);
  }

  .scrolled-nav {
    background-color: black;
    box-shadow: 0 4px 6px -1px rgb(0, 0, 0, 0.1), 0 2px 4px -1px rgb(0, 0, 0, 0.06);

    nav {
      padding: 8px 0;

      .branding {
        img {
          width: 40px;
          box-shadow: 0 4px 6px -1px rgb(0, 0, 0, 0.1), 0 2px 4px -1px rgb(0, 0, 0, 0.06);
        }
      }
    }
  }
}

</style>