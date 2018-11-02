<template>
  <div class="hello">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="../">
              <img src="static/wave.png" alt="Logo">
          </a>
          <span class="navbar-burger burger" data-target="navbarMenu">
              <span></span>
              <span></span>
              <span></span>
          </span>
        </div>
        <div class="navbar-menu" id="navbarMenu">
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
  data () {
    return {
      navbar: [
        {name: 'Home', router: '/', icon: 'home', fa: 'fas'},
        {name: 'Projects', router: '/projects', icon: 'project-diagram', fa: 'fas'},
        {name: 'About', router: '/about', icon: 'project-diagram', fa: 'fas'},
        {name: 'Skills', router: 'https://drive.google.com/file/d/1WJG6qCVdnLnF2eu-s02A4Cd3hto6Fp92/view?usp=sharing', icon: 'star', fa: 'fas'},
        {name: 'Resume', router: '/projects', icon: 'book', fa: 'fas'},
        {name: 'Contacts', router: 'https://github.com/Minaparnian', icon: 'address-book', fa: 'fas'},
        {name: 'Github', router: '/https://github.com/Minaparnian', icon: 'github-alt', fa: 'fab'}
      ]

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
