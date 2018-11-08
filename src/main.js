import Vue from 'vue'
import App from './App.vue'
import 'bulma/css/bulma.css'
import Router from './router/index.js'
import Store from './store/index.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faInfo, faHome, faStar, faBook, faAddressBook, faProjectDiagram, faFileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add([ faInfo, faHome, faStar, faBook, faAddressBook, faProjectDiagram, faGithubAlt, faFileAlt, faEnvelope ])

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({ // eslint-disable-line no-new
  el: '#app',
  router: Router,
  store: Store,
  render: h => h(App)
})
