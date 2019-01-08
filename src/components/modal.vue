<template>
    <transition name="modal">
      <div class="modal is-active" @click="$emit('close')">
         <div class="modal-background"></div>
         <div class="modal-content">
           <div class="box" v-for="project in projects" :key="project.id">
             <slot name="header">
               <span v-text="project.title"></span>
             </slot>
             <slot name="body">
               I'm the default body!
             </slot>
             <slot name="footer">
               I'm the default footer!
             </slot>
           </div>
         </div>
         <button class="modal-close" @click="close"></button>
       </div>
    </transition>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Modal',
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'projects'
    ])
  },
  methods: {
    close () {
      this.$emit('close')
    }
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
