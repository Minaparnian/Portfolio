<template>
    <transition name="modal">
      <div class="modal" :class="{ 'is-active': active }">
         <div class="modal-background"></div>
         <div class="modal-content">
           <div class="box">
             <h1 class="title" v-text="modal.name"></h1>
             <slot name="img">
             </slot>
             <slot name="footer">
             </slot>
           </div>
         </div>
         <button class="modal-close" @click.prevent="active = false" aria-label="close"></button>
       </div>
    </transition>
</template>

<script>
export default {
  name: 'Modal',
  data () {
    return {
      active: false,
      modal: false
    }
  },
  methods: {
    show () {
      this.active = true
    }
  },
  created () {
    this.$on('toggleModal', (project) => {
      this.modal = project
      this.show()
    })
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
