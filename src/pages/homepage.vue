<template>
  <div>
    <div class="hero is-fullheight is-cover" :style="'background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(/static/blue-bright-honeycomb-pattern-1920x1200-digital-art-desktop-wallpaper-25192.jpg); background-size: cover;background-position:center center; background-repeat: no-repeat;'">
      <div class="hero-body is-fullheight">
        <div class="container has-text-centered">
            <div class="column is-6 is-offset-3">
              <h1 class="has-text-white is-size-5">I'm <span style="color:#e31b6d">Mina Parnian</span>.</h1>
              <vue-typer :repeat='0' text='Front End Developer'></vue-typer>
              <h1 class="has-text-white is-size-5">Creator | Coder | Web developer</h1>
            </div>
        </div>
      </div>
    </div>
    <div class="hero-foot has-background-white">
      <footerSection>hello</footerSection>
    </div>
  </div>
</template>

<script>
import footerSection from '@/components/footer'
export default {
  name: 'Homepage',
  components: {footerSection},
  data () {
    return {
    }
  }
}
</script>

<style>
  @keyframes rocking {
  0%,100% {transform: rotateZ(-10deg);},
  50%     {transform: rotateZ(10deg);}
}

.vue-typer {
  font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
  font-size: 50px;
}
.vue-typer .custom.char.typed {
  color: #fff;
}
.vue-typer .custom.char.selected {
  color: #E91E63;
}

.vue-typer .custom.caret {
  animation: rocking 1s ease-in-out 0s infinite;
}
.vue-typer .custom.caret.typing {
  background-color: #fff;
}
.vue-typer .custom.caret.selecting {
  display: inline-block;
  background-color: #E91E63;
}
</style>
