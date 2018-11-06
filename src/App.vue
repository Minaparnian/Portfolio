<template>
  <div id="app">
    <div class="hero is-info is-fullheight">
      <navSection></navSection>
        <div class="hero-body">
          <router-view></router-view>
        </div>
    </div>
    <div class="hero-foot">
      <footerSection>hello</footerSection>
    </div>
  </div>
</template>

<script>
import navSection from '@/components/nav'
import footerSection from '@/components/footer'
import './assets/sass/styles.scss'
export default {
  name: 'App',
  components: {navSection, footerSection}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.is-info {
  background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(/static/wse-top-banner.jpg) no-repeat center center fixed;
  background-size: cover;
}
</style>
