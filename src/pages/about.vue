<template>
  <div class="hero-body">
    <div class="container ">
      <div class="columns">
        <transition>
          <div class="column is-6">
            <h1 class="has-text-light is-size-1 has-text-center">HELLO!!</h1>
            <h1 class="has-text-light is-size-5 has-text-center is-margin-bt-20">I'm a front-end developer</h1>
            <img src="/img/mina-circle.png" alt="">
            <div style="margin-top:20px" class="columns is-centered is-mobile">
              <div class="column is-1"><a class="social-link" href="https://www.linkedin.com/in/mina-parnian/" target="_blank"><font-awesome-icon class="has-text-light" :icon="['fab', 'linkedin']" /></a></div>
              <div class="column is-1"><a class="social-link" href="https://github.com/Minaparnian" target="_blank"><font-awesome-icon class="has-text-light" :icon="['fab', 'github-alt']"/></a></div>
              <div class="column is-1"><a class="social-link" href="tel:61420646053" target="_blank"><font-awesome-icon class="has-text-light" icon="phone" /></a></div>
              <div class="column is-1"><a class="social-link" href="mailto:minaparnian66@gmail.com"><font-awesome-icon class="has-text-light" icon="envelope" /></a></div>
            </div>
          </div>
        </transition>
        <div class="column is-6">
          <h1 class="has-text-light is-size-4 has-text-left has-text-centered-touch is-margin-bt-20">A bit about me</h1>
          <h1 class="has-text-light is-1 has-text-left has-text-centered-touch is-margin-bt-20">I'm a Sydney-based Front End developer graduated from General Assembly's Web Development Immersive where I got to submerge myself in the wide world of coding. I hold a degree in Graphic design and have previously worked as a graphic designer. I am on the lookout for a front-end role, for an innovative company, where I can fuse my passion for coding and design. What drew me in coding was the challenge of working at an innovative company that provided me the perfect platform to utilize and develop my skills in both coding and design.</h1>
          <h1 class="has-text-light is-size-4 has-text-centered-touch has-text-left is-margin-bt-20">Here are a few quick things about me:</h1>
          <h1 class="has-text-light is-1 has-text-centered-touch has-text-left">I enjoy solving problems and tackle each problem with gusto and determination</h1>
          <h1 class="has-text-light is-1 has-text-centered-touch has-text-left">As a programmer, it is your job to put yourself out of business. I believe What you do today can be automated tomorrow</h1>
          <h1 class="has-text-light is-1 has-text-centered-touch has-text-left">An adventure seeker, I'm an extrovert who is comfortable with a good chat.</h1>
          <h1 class="has-text-light is-1 has-text-centered-touch has-text-left">My motto is "Success is the result of perfection, hard work, learning from failure, loyalty, and persistence"</h1>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
    }
  }
}
</script>
