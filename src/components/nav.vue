<template>
  <div class="hello">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="../">
              <img src="static/wave.png" alt="Logo">
          </a>
        </div>
        <div class="navbar-menu" id="navbarMenu">
          <div class="navbar-end">
            <span class="navbar-item">
              <router-link class="navbar-item button is-white is-outlined" to="/">
                <span class="icon"><i class="fa fa-home"></i></span>
                <span>Home</span>
              </router-link>
            </span>
            <span class="navbar-item">
              <router-link class="navbar-item button is-white is-outlined" to="/projects">
                  <span class="icon">
                      <i class="fas fa-project-diagram"></i>
                  </span>
                  <span>Projects</span>
              </router-link>
            </span>
            <span class="navbar-item">
              <router-link class="navbar-item button is-white is-outlined" to="/about">
                  <span class="icon">
                      <i class="fas fa-project-diagram"></i>
                  </span>
                  <i class="fas fa-user-astronaut"></i>
              </router-link>
            </span>
            <span class="navbar-item">
              <router-link class="navbar-item button is-white is-outlined" to="/skills">
                  <span class="icon">
                      <i class="far fa-star"></i>
                  </span>
                  <span>Skills</span>
              </router-link>
            </span>
            <span class="navbar-item">
                <router-link class="navbar-item button is-white is-outlined" to="https://drive.google.com/file/d/1WJG6qCVdnLnF2eu-s02A4Cd3hto6Fp92/view?usp=sharing">
                    <span class="icon">
                        <i class="fa fa-book"></i>
                    </span>
                    <span>Resume</span>
                </router-link>
            </span>
            <span class="navbar-item">
              <router-link class="navbar-item button is-white is-outlined" to="https://github.com/Minaparnian">
                    <span class="icon">
                        <i class="fas fa-address-book"></i>
                    </span>
                    <span>Contacts</span>
              </router-link>
            </span>
            <span class="navbar-item">
              <router-link class="navbar-item button is-white is-outlined" to="https://github.com/Minaparnian">
                    <span class="icon">
                        <i class="fab fa-github-alt"></i>
                    </span>
                    <span>Github</span>
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
