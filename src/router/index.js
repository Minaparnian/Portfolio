import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/pages/homepage'
import Projects from '@/pages/projects'
import About from '@/pages/about'
import Skills from '@/pages/skills'
import DataBase from '@/pages/database'
import Modal from '@/components/modal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage,
      meta: {background: '/static/image-2.jpg'}
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/projects/project/:id',
      name: 'Modal',
      component: Modal
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
    },
    {
      path: '/database',
      name: 'DataBase',
      component: DataBase
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (to.hash === '#contacts') {
      return {
        selector: to.hash,
        offset: { x: 0, y: 10 },
        behavior: 'smooth'
      }
    }
  },
  linkExactActiveClass: 'is-active',
  // to add normall url instead of hashtag between
  mode: 'history'
})
