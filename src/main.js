import Vue from 'vue'
import App from './App.vue'
import 'bulma/css/bulma.css'
import Router from './router/index.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faHome, faStar, faBook, faAddressBook, faProjectDiagram } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add([ faCoffee, faHome, faStar, faBook, faAddressBook, faProjectDiagram, faGithub ])

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({ // eslint-disable-line no-new
  el: '#app',
  router: Router,
  render: h => h(App)
})
