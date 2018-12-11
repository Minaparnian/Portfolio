<template>
    <nav class="navbar is-black">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
              <h1 class="is-size-3 has-text-weight-bold"><span style="color:#e31b6d">MINA</span>P</h1>
          </a>
          <span @click="display = !display" :class="['navbar-burger burger', {'is-active' : display }]" data-target="navbarMenu">
              <span></span>
              <span></span>
              <span></span>
          </span>
        </div>
        <div :class="['navbar-menu',{'is-active Navbar-menu': display}]" id="navbarMenu">
          <div class="navbar-end">
            <span class="navbar-item" v-for="(item, key) in navbar" :key="key">
              <router-link v-if="key <= 4" class="navbar-item button is-white is-outlined" :to="{path:item.router}">
                  <span class="icon">
                      <font-awesome-icon v-if="key == 6" :icon="['fab', item.icon]" />
                      <font-awesome-icon v-else :icon="['fas', item.icon]" />
                  </span>
                  <span v-text="item.name"></span>
              </router-link>
              <a v-if="key > 4"  class="navbar-item button is-white is-outlined" :href="item.link">
                <span class="icon">
                    <font-awesome-icon v-if="key == 6" :icon="['fab', item.icon]" />
                    <font-awesome-icon v-else :icon="['fas', item.icon]" />
                </span>
                <span v-text="item.name"></span>
              </a>
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
      {name: 'Home', origin: 'Home', router: '/', icon: 'home'},
      {name: 'Projects', origin: 'Projects', router: '/projects', icon: 'project-diagram'},
      {name: 'About', origin: 'About', router: '/about', icon: 'info'},
      {name: 'Skills', origin: 'Skills', router: '/skills', icon: 'star'},
      // {name: 'DataBase', origin: 'DataBase', router: '/database', icon: 'project-diagram'},
      {name: 'Resume', origin: 'Resume', link: 'https://drive.google.com/file/d/1WJG6qCVdnLnF2eu-s02A4Cd3hto6Fp92/view?usp=sharing', icon: 'file-alt'},
      {name: 'Contacts', origin: 'Contacts', link: '/#contacts', icon: 'envelope'},
      {name: 'Github', origin: 'Github', link: 'https://github.com/Minaparnian', icon: 'github-alt'}

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

.Navbar-menu {
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
  background-color: #000;
}

</style>
