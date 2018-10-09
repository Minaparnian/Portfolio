<template>
  <section class="hero is-info is-fullheight">
    <div class="hero-head">
      <Nav></Nav>
    </div>
  </section>
</template>

<script>

import Nav from '@/components/nav'

export default {
  components: {Nav},
  name: 'Homepage',
  data () {
    return {

    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.is-info {
  background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(/static/wse-top-banner.jpg) no-repeat center center fixed;
  background-size: cover;
}

</style>
