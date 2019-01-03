import Vue from 'vue'
import App from './App.vue'
import 'bulma/css/bulma.css'
import Router from './router/index.js'
import Store from './store/index.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faInfo, faHome, faStar, faBook, faAddressBook, faProjectDiagram, faFileAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGithubAlt, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueTyperPlugin from 'vue-typer'
import VueCarousel from 'vue-carousel'

library.add([ faInfo, faHome, faStar, faBook, faAddressBook, faProjectDiagram, faGithubAlt, faLinkedin, faFileAlt, faEnvelope, faPhone ])

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueTyperPlugin, VueCarousel)

Vue.config.productionTip = false

new Vue({ // eslint-disable-line no-new
  el: '#app',
  router: Router,
  store: Store,
  render: h => h(App)
})
