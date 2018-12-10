<template>
  <div>
    <div class="container has-text-centered">
        <div class="column is-6 is-offset-3">
          <h1 class="has-text-white is-size-5">I'm <span style="color:#e31b6d">Mina Parnian</span>.</h1>
          <vue-typer :repeat='0' text='Front End Developer'></vue-typer>
          <h1 class="has-text-white is-size-5">Creator | Coder | Web developer</h1>
        </div>
    </div>
    <div>
      <div id="macbook">
        <div class="macbook-mn-slider" id="macbook-mn-slider">
          <div class="macbook-layer layer">
            <div class="macbook-layer-scroll">
              <span class="down-arrow">
                <svg class="arrows">
                  <path class="a1" d="M0 0 L30 32 L60 0"></path>
                  <path class="a2" d="M0 20 L30 52 L60 20"></path>
                  <path class="a3" d="M0 40 L30 72 L60 40"></path>
                </svg>
              </span>
            </div>
          </div>
          <div class="macbook-mn-holder">
            <div class="macbook-mn-slide" id="macbook-mn-slide-0">
              <img width="785"  src="https://c2.staticflickr.com/2/1916/44918226234_52321a60e5_o.png">
            </div>
          </div>
        </div>
      </div>
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
.macbook-mn-slider {
  width: 1249px;
  height: 796px;
  background: url(https://mbtskoudsalg.com/images/blank-laptop-png-8.png);
  background-size: cover;
  margin: auto;
  position:relative;
}

.macbook-mn-holder {
  position: absolute;
  height: 489px;
  overflow-y: scroll;
  top: 140px;
  left: 232px;
}

.macbook-layer {
  width: 785px;
  height: 498px;
  position: absolute;
  top: 140px;
  left: 232px;
  background-color: rgba(1,1,1,.8);
  z-index: 1;
  overflow-y: scroll;
}

.macbook-layer-scroll {
  width: 283px;
  height: 600px;
}

.arrows {
	width: 60px;
	height: 72px;
	position: absolute;
	left: 50%;
	margin-left: -30px;
	bottom: 20px;
}

.arrows path {
	stroke: #fff;
	fill: transparent;
	stroke-width: 1px;
	animation: arrow 2s infinite;
	-webkit-animation: arrow 2s infinite;
}

@keyframes arrow {
  0% {opacity:0}
  40% {opacity:1}
  80% {opacity:0}
  100% {opacity:0}
}

@-webkit-keyframes arrow {
  0% {opacity:0}
  40% {opacity:1}
  80% {opacity:0}
  100% {opacity:0}
}

.arrows path.a1 {
	animation-delay:-1s;
	-webkit-animation-delay:-1s;
}

.arrows path.a2 {
	animation-delay:-0.5s;
	-webkit-animation-delay:-0.5s;
}

.arrows path.a3 {
	animation-delay:0s;
	-webkit-animation-delay:0s;
}

</style>
