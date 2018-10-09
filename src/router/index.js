import Vue from 'vue'
import Router from 'vue-router'
import Nav from '@/components/nav'
import Homepage from '@/pages/homepage'
import Projects from '@/pages/project'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/nav',
      name: 'nav',
      component: Nav
    },

    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },

    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    }
  ]
})
