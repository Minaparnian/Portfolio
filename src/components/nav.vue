<template>
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="../">
              <img src="static/wave.png" alt="Logo">
          </a>
          <span @click="display = !display" :class="['navbar-burger burger', {'is-active' : display }]" data-target="navbarMenu">
              <span></span>
              <span></span>
              <span></span>
          </span>
        </div>
        <div :class="['navbar-menu',{'is-active': display}]" id="navbarMenu">
          <div class="navbar-end">
            <span class="navbar-item" v-for="(item, key) in navbar" :key="key">
              <router-link class="navbar-item button is-white is-outlined" :to="{path:item.router}">
                  <span class="icon">
                      <!-- <i :class="item.fa +  ' fa-' +  item.icon" ></i> -->
                      <font-awesome-icon v-if="key == 6" :icon="['fab', item.icon]" />
                      <font-awesome-icon v-else :icon="['fas', item.icon]" />
                  </span>
                  <span v-text="item.name"></span>
              </router-link>
            </span>
          </div>
        </div>
      </div>
    </nav>
</template>
<script>
export default {
  name: '',
  data: () => ({
    navbar: [
      {name: '1', origin: 'Home', router: '/', icon: 'home'},
      {name: '2', origin: 'Projects', router: '/projects', icon: 'project-diagram'},
      {name: '3', origin: 'About', router: '/about', icon: 'info'},
      {name: '4', origin: 'Skills', router: '/skills', icon: 'star'},
      {name: '5', origin: 'Resume', router: 'https://drive.google.com/file/d/1WJG6qCVdnLnF2eu-s02A4Cd3hto6Fp92/view?usp=sharing', icon: 'file-alt'},
      {name: '6', origin: 'Contacts', router: 'https://github.com/Minaparnian', icon: 'envelope'},
      {name: '7', origin: 'Github', router: '/https://github.com/Minaparnian', icon: 'github-alt'}
    ],
    display: false
  })
}
</script>

<style>

.hero.is-info .navbar-menu {
  background-color: transparent;
}

.navbar-burger {
  color: #fff;
}

/* .navbar-menu {
  height: 100%;
  width: 250px;
  position: fixed;
  z-index: -1;
  top: 0;
  right: 0;
  overflow-x: hidden;
  transition: 0.5s;
  padding: 0;
  padding-top: 50px;
} */

</style>
