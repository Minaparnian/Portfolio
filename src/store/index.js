import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: [
      {title: 'ChillOut', img: 'static/dit-lp.jpg', previewLink: 'https://chillout-app.herokuapp.com', githubLink: 'https://github.com/Minaparnian/chillOut', id: 1},
      {title: 'Adventurous', img: 'static/dit-lp.jpg', previewLink: 'https://dry-mesa-99000.herokuapp.com/', githubLink: 'https://github.com/Minaparnian/Adventurous', id: 2},
      {title: 'Tic-Tac-Toe', img: 'static/dit-lp.jpg', previewLink: 'https://minaparnian.github.io/tictactoe/', githubLink: 'https://github.com/Minaparnian/tictact', id: 3},
      {title: 'ChillOut', img: 'static/dit-lp.jpg', previewLink: 'https://chillout-app.herokuapp.com', githubLink: 'https://github.com/Minaparnian/chillOut', id: 4},
      {title: 'ChillOut', img: 'static/dit-lp.jpg', previewLink: 'https://chillout-app.herokuapp.com', githubLink: 'https://github.com/Minaparnian/chillOut', id: 5},
      {title: 'ChillOut', img: 'static/dit-lp.jpg', previewLink: 'https://chillout-app.herokuapp.com', githubLink: 'https://github.com/Minaparnian/chillOut', id: 6}
    ],
    contacts: [
      {name: 'mina', email: 'minap@equitise.com', message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque aut, dolorum! Reprehenderit provident aliquam itaque quidem quo delectus laborum nulla, officia repellendus illo excepturi, eveniet dignissimos voluptatibus, earum consequatur accusantium!', date: new Date().toLocaleDateString('en-US')},
      {name: 'mona', email: 'monap@equitise.com', message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque aut, dolorum! Reprehenderit provident aliquam itaque quidem quo delectus laborum nulla, officia repellendus illo excepturi, eveniet dignissimos voluptatibus, earum consequatur accusantium!', date: new Date().toLocaleDateString('en-US')}
    ]
  },
  mutations: {
    ADD_CONTACT: (state, contact) => {
      state.contacts.push(contact)
    }
  },
  actions: {

  }
})
