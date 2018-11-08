<template>
  <div>
        <footer class="hero-body has-grey-background">
          <div class="container">
            <div class="section-heading">
              <h3 class="title is-2">Let's get in touch</h3>
              <h4 class="subtitle is-5">Feel free to get in touch - I'd love to hear from you</h4>
            </div>
            <br>

            <div class="columns">
              <div class="column is-6 is-offset-3">
                <div class="box">
                  <div class="field">
                    <label class="label">Name</label>
                    <div class="control">
                      <input class="input" type="text" placeholder="Text input" v-model="newName">
                    </div>
                  </div>

                  <div class="field">
                    <label class="label">Email</label>
                    <div class="control has-icons-left">
                      <input class="input" type="email" placeholder="Email input" value="" v-model="newEmail">
                      <span class="icon is-small is-left">
                        <font-awesome-icon  icon="envelope" />
                      </span>
                    </div>
                  </div>

                  <div class="field">
                    <label class="label">Message</label>
                    <div class="control">
                      <textarea v-model="newMessage" class="textarea" placeholder="Textarea"></textarea>
                    </div>
                  </div>

                  <div class="field is-grouped has-text-centered">
                    <div class="control">
                      <button @click.prevent="addContact"  class="button is-link"><span class="icon">
                          <font-awesome-icon  icon="envelope" />
                        </span>
                        <span>Submit</span></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="columns is-centered">
              <div class="column is-1"><a href="https://www.linkedin.com/in/mina-parnian/" target="_blank"><img class="social-link" src="static/Linkedin.png" alt="LinkedIn"></a></div>
              <div class="column is-1"><a href="https://github.com/Minaparnian" target="_blank"><img class="social-link" src="static/github.png" alt="Github"></a></div>
              <div class="column is-1"><a href="tel:61420646053" target="_blank"><img class="social-link" src="static/Phone-Download-PNG.png" alt="Phone"></a></div>
            </div>

            <div class="columns">
              <div class="column is-4" v-for="(contact, key) in contacts" :key="key">
                <h1 v-text="contact.name"></h1>
                <h1 v-text="contact.email"></h1>
                <h1 v-text="contact.message"></h1>
              </div>
            </div>

          </div>
        </footer>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  name: '',
  data: () => ({
    newName: '',
    newEmail: '',
    newMessage: ''
  }),
  computed: {
    ...mapState([
      'contacts'
    ])
  },
  methods: {
    ...mapMutations([
      'ADD_CONTACT'
    ]),
    addContact () {
      this.ADD_CONTACT({name: this.newName, email: this.newEmail, message: this.newMessage})
      this.newName = ''
      this.newEmail = ''
      this.newMessage = ''
    }
  }
}
</script>

<style>
.social-link {
  opacity: .4;
  transition: .9;
}
.social-link:hover {
  opacity: .2;
}

</style>
