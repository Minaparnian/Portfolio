import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/pages/homepage'
import Projects from '@/pages/project'
import About from '@/pages/about'
import Skills from '@/pages/skills'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },

    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },

    {
      path: '/about',
      name: 'About',
      component: About
    },

    {
      path: '/skills',
      name: 'Skills',
      component: Skills
    }
  ],
  linkActiveClass: 'is-active',
  linkExactActiveClass: 'is-active',
  // to add normall url instead of hashtag between
  mode: 'history'
})
