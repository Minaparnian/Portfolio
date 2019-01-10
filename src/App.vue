<template>
  <div id="app" class="is-default-bg">
    <section class="hero is-fullheight" :style="'background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(' + ($route.meta.background ? $route.meta.background : '' ) + '); background-size: cover;background-position:center bottom; background-repeat: no-repeat;'">
      <div class="hero-head">
          <navSection></navSection>
      </div>
        <router-view></router-view>
    </section>
  </div>
</template>

<script>
import navSection from '@/components/nav'
import './assets/css/styles.sass'
export default {
  name: 'App',
  components: {navSection}
}
</script>

<style>
@import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.is-cover {
  background-size: cover;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
