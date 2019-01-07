<template>
  <div class="">
    <div class="container has-text-centered">
      <div class="portfolio-container">
        <carousel  :paginationActiveColor="'#e31b6d'" :perPageCustom="[[320, 1], [1199, 2]]">
            <slide v-for="(project, key) in projects" :key="key">
              <div class="columns  is-centered">
                <div class="column is-10">
                  <div class="card">
                    <router-link :to="{ name: 'Modal', params: {id: project.title, project: project.title } }">
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
                    </router-link>
                    <footer class="card-footer">
                      <a target="_blank" :href="project.previewLink" class="card-footer-item">Preview</a>
                      <a target="_blank" :href="project.githubLink" class="card-footer-item">Source Code</a>
                    </footer>
                  </div>
                </div>
              </div>
            </slide>
        </carousel>
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
.portfolio-container {
  padding: 20px;
}
.portfolio-container .card {
  margin-bottom: 2em;
}
</style>
