<template>
    <transition name="modal">
      <div class="modal is-active" @click="$emit('close')">
         <div class="modal-background"></div>
         <div class="modal-content">
           <div class="box">
             <p>{{msg}}</p>
           </div>
         </div>
         <button class="modal-close" @click="$emit('close')"></button>
       </div>
    </transition>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Project',
  data () {
    return {
      project: this.$routes.params.id,
      msg: 'hello'
    }
  },
  computed: {
    ...mapState([
      'projects'
    ])
  }
}
</script>

<style>
  .modal-enter-active, .modal-leave-active {
    transition: opacity .3s
  }
  .modal-enter, .modal-leave-active {
    opacity: 0;
  }
  .modal-enter .modal-container, .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  /* IE Problem */
  .modal {
      flex-direction: column;
  }
</style>
