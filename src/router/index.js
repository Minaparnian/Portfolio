import Vue from 'vue'
import Router from 'vue-router'
import Nav from '@/components/nav'
import Homepage from '@/pages/homepage'
import Projects from '@/pages/project'
import About from '@/pages/about'

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
    }
  ]
})
