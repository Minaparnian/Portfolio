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
                      <i class="fa fa-superpowers"></i>
                  </span>
                  <span>Examples</span>
              </router-link>
            </span>
            <span class="navbar-item">
                <router-link class="navbar-item button is-white is-outlined" to="/resume">
                    <span class="icon">
                        <i class="fa fa-book"></i>
                    </span>
                    <span>Documentation</span>
                </router-link>
            </span>
            <span class="navbar-item">
              <router-link class="navbar-item button is-white is-outlined" to="/github">
                    <span class="icon">
                        <i class="fa fa-github" aria-hidden="true"></i>
                    </span>
                    <span>View Source</span>
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
