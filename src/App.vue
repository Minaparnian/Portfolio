<template>
  <div id="app" class="is-default-bg">
    <navSection></navSection>
    <div class="hero is-fullheight is-cover" :style="'background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(' + ($route.meta.background) + '); background-size: cover;background-position:center; background-repeat: no-repeat;'">
        <div class="hero-body">
          <transition
            name="fade"
            mode="out-in"
          >
          <router-view></router-view>
          </transition>
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
import './assets/css/styles.sass'
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
