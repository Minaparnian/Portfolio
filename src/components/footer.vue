<template>
  <div class="columns is-centered is-mobile">
    <div class="column is-1"><a class="social-link" href="https://www.linkedin.com/in/mina-parnian/" target="_blank"><font-awesome-icon class="has-text-light" :icon="['fab', 'linkedin']" /></a></div>
    <div class="column is-1"><a class="social-link" href="https://github.com/Minaparnian" target="_blank"><font-awesome-icon class="has-text-light" :icon="['fab', 'github-alt']"/></a></div>
    <div class="column is-1"><a class="social-link" href="tel:61420646053" target="_blank"><font-awesome-icon class="has-text-light" icon="phone" /></a></div>
    <div class="column is-1"><a class="social-link" href="mailto:minaparnian66@gmail.com"><font-awesome-icon class="has-text-light" icon="envelope" /></a></div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'Footer',
  data: () => ({
    newName: '',
    newEmail: '',
    newMessage: '',
    msg: ''
  }),

  methods: {
    ...mapMutations([
      'ADD_CONTACT'
    ]),
    addContact () {
      this.ADD_CONTACT({name: this.newName, email: this.newEmail, message: this.newMessage})
      this.newName = ''
      this.newEmail = ''
      this.newMessage = ''
      this.msg = 'Successfully send'
    }
  }
}
</script>

<style>
.social-link {
  transition: .9;
}
.social-link:hover {
  opacity: .4;
}
.msg {
  margin-top: 20px;
  color: #68cfad;
}
</style>
