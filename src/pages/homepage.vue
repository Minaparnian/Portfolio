<template>
  <div class="container has-text-centered">
      <div class="column is-6 is-offset-3">
        <h1 class="has-text-white is-size-5">I'm Mina Parnian.</h1>
        <vue-typer :repeat='0' text='Front End Developer'></vue-typer>
        <h1 class="has-text-white is-size-5">Creator | Coder | Web developer</h1>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Homepage',
  data () {
    return {
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
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
