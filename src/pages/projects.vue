<template>
  <div class="">
    <div class="container has-text-centered">
      <div class="portfolio-container">
        <carousel  :paginationActiveColor="'#e31b6d'" :perPageCustom="[[320, 1], [1199, 2]]">
            <slide v-for="project in projects" :key="project.id" :project="project">
              <div class="columns is-centered">
                <div class="column is-10">
                  <div class="card" @click="toggleModal(project)" style="cursor:pointer">
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
                        <a target="_blank" :href="project.previewLink" class="card-footer-item">Preview</a>
                        <a target="_blank" :href="project.githubLink" class="card-footer-item">Source Code</a>
                      </footer>
                  </div>
                  <p class="has-text-light" v-text="project.info"></p>
                </div>
              </div>
            </slide>
        </carousel>
      </div>
    </div>
    <modal>
    </modal>
  </div>
</template>

<script>
// helpers for vuex
import { mapState } from 'vuex'
import { Carousel, Slide } from 'vue-carousel'
import modal from '@/components/modal'
export default {
  components: {
    Carousel,
    Slide,
    modal
  },
  props: ['project'],
  name: 'projects',
  data: () => ({
  }),
  computed: {
    ...mapState([
      'projects'
    ])
  },
  methods: {
    toggleModal (project) {
      this.$emit('toggleModal', project)
    }
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
