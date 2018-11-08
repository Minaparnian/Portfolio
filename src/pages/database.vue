<template lang="html">
  <div>
    <div class="table is-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Message</th>
        </tr>
      </thead>
      <tbody v-for="(contact, key) in contacts" :key="key">
        <tr>
          <td v-text="contact.name"></td>
          <td v-text="contact.email"></td>
          <td v-text="contact.message"></td>
        </tr>
      </tbody>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'DataBase',
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
    ])
  }
}
</script>

<style lang="css">
</style>
