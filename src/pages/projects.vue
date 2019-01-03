<template>
  <div class="hero is-fullheight is-cover">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="portfolio-container">
          <carousel :per-page="1">
              <slide v-for="(project, key) in projects" :key="key">
                <router-link :to="{ name: 'Modal', params: {id: project.title, project: project.title } }">
                  <div class="card">
                    <header class="card-header">
                      <p class="card-header-title">
                        <span v-text="project.title"></span>
                      </p>
                    </header>
                    <div class="card-content">
                      <figure class="image">
                        <img :src="project.img" alt="modal-cards template screenshot">
                      </figure>
                    </div>
                    <footer class="card-footer">
                      <a :href="project.previewLink" class="card-footer-item">Preview</a>
                      <a :href="project.githubLink" class="card-footer-item">Source Code</a>
                    </footer>
                  </div>
                </router-link>
              </slide>
          </carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// helpers for vuex
import { mapState } from 'vuex'
import { Carousel, Slide } from 'vue-carousel'
export default {
  components: {
    Carousel,
    Slide
  },
  name: 'projects',
  data: () => ({
  }),
  computed: {
    ...mapState([
      'projects'
    ])
  }
}
</script>

<style>
.portfolio-container .card {
  margin-bottom: 2em;
}
</style>
