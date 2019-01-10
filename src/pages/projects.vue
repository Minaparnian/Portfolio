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
                        <p class="card-header-title is-align-center">
                          <span v-text="project.title"></span>
                        </p>
                      </header>
                      <div class="card-content">
                        <figure class="image">
                          <img :src="project.laptopImg" alt="modal-cards template screenshot">
                        </figure>
                      </div>
                      <footer class="card-footer">
                        <div @click="toggleModal(project)" class="card-footer-item"><font-awesome-icon class="has-text-dark is-size-2" icon="eye" /></div>
                      </footer>
                  </div>
                </div>
              </div>
            </slide>
        </carousel>
      </div>
    </div>
    <modal v-show="showModal" @close="showModal = false">
      <template slot="title">
        {{ title }}
      </template>
      <template slot="info">
        {{ info }}
      </template>
      <template slot="laptopImg">
        <img :src="laptopImg" alt="">
      </template>
      <template slot="previewLink">
        <div class="column is-4"><a class="social-link" :href="previewLink" target="_blank"><font-awesome-icon class="has-text-dark is-size-1" :icon="['fab', 'github-alt']"/></a></div>
      </template>
      <template slot="githubLink">
        <div class="column is-4"><a class="social-link" :href="githubLink" target="_blank"><font-awesome-icon class="has-text-dark is-size-1" icon="desktop"/></a></div>
      </template>
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
    showModal: false,
    title: '',
    info: '',
    img: '',
    previewLink: '',
    githubLink: '',
    laptopImg: ''
  }),
  computed: {
    ...mapState([
      'projects'
    ])
  },
  methods: {
    toggleModal (project) {
      this.$emit('toggleModal', project)
      this.showModal = true
      this.title = project.title
      this.info = project.info
      this.img = project.img
      this.previewLink = project.previewLink
      this.githubLink = project.githubLink
      this.laptopImg = project.laptopImg
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
