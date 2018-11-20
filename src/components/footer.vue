<template>
  <div>
    <footer class="hero-body has-grey-background" id="contacts">
      <div class="container">
        <div class="section-heading">
          <h3 class="title is-2">Let's get in touch</h3>
          <h4 class="subtitle is-5">Feel free to get in touch - I'd love to hear from you</h4>
        </div>
        <br>
        <!-- <div class="columns">
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
                    <h1 class="msg" v-text="msg"></h1>
                </div>
              </div>
            </div>
          </div>
        </div> -->
        <div class="columns is-centered">
          <div class="column is-1"><a href="https://www.linkedin.com/in/mina-parnian/" target="_blank"><img class="social-link" src="static/Linkedin.png" alt="LinkedIn"></a></div>
          <div class="column is-1"><a href="https://github.com/Minaparnian" target="_blank"><img class="social-link" src="static/github.png" alt="Github"></a></div>
          <div class="column is-1"><a href="tel:61420646053" target="_blank"><img class="social-link" src="static/Phone-Download-PNG.png" alt="Phone"></a></div>
          <div class="column is-1"><a href="mailto:minaparnian66@gmail.com"><img class="social-link" src="static/email-logo-black.png" alt="email"></a></div>
        </div>
      </div>
    </footer>
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
  opacity: .4;
  transition: .9;
}
.social-link:hover {
  opacity: .2;
}
.msg {
  margin-top: 20px;
  color: #68cfad;
}
</style>
