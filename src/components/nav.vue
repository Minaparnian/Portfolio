<template>
  <div class="hero-head">
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
            <span class="navbar-item" v-for="item in navbar" :key="item">
              <router-link class="navbar-item button is-white is-outlined" :to="{path:item.router}">
                  <span class="icon">
                      <i :class="item.fa +  ' fa-' +  item.icon"></i>
                  </span>
                  <span v-text="item.name"></span>
              </router-link>
            </span>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: '',
  data: () => ({
    navbar: [
      {name: 'Home', router: '/', icon: 'home', fa: 'fas'},
      {name: 'Projects', router: '/projects', icon: 'project-diagram', fa: 'fas'},
      {name: 'About', router: '/about', icon: 'project-diagram', fa: 'fas'},
      {name: 'Skills', router: '/skills', icon: 'star', fa: 'fas'},
      {name: 'Resume', router: 'https://drive.google.com/file/d/1WJG6qCVdnLnF2eu-s02A4Cd3hto6Fp92/view?usp=sharing', icon: 'book', fa: 'fas'},
      {name: 'Contacts', router: 'https://github.com/Minaparnian', icon: 'address-book', fa: 'fas'},
      {name: 'Github', router: '/https://github.com/Minaparnian', icon: 'github-alt', fa: 'fab'}
    ],
    display: false
  })
}
</script>

<style>

</style>
