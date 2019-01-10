<template>
    <transition name="modal">
      <div class="modal is-active" @click="$emit('close')">
         <div class="modal-background"></div>
         <div class="modal-content">
           <div class="box">
             <div class="columns">
               <div class="column">
                 <slot name="laptopImg">
                 </slot>
               </div>
               <div class="column">
                 <h1 class="is-size-3 is-margin-bt-20">
                   <slot name="title">
                   </slot>
                 </h1>
                 <h1 class="is-margin-bt-20">
                   <slot name="info">
                   </slot>
                 </h1>
                 <div class="columns is-centered is-mobile">
                   <slot name="previewLink">
                   </slot>
                   <slot name="githubLink">
                   </slot>
                 </div>
               </div>
             </div>
           </div>
         </div>
         <button class="modal-close" @click="$emit('close')"></button>
       </div>
    </transition>
</template>

<script>
export default {
  name: 'Modal',
  data () {
    return {
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
