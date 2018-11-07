<template>
    <transition name="modal">
        <div class="modal is-active" @click="$emit('close')">
            <div class="modal-background"></div>
            <slot name="card">
                <div class="modal-card" @click.stop style="padding:20px;">
                    <header class="modal-card-head">
                      <div class="columns is-mobile is-full">
                        <div class="column is-10">
                          <p class="modal-card-title">
                              <slot class="modal-title" name="title"></slot>
                          </p>
                        </div>
                        <div class="column is-2" style="text-align: right;">
                          <button class="delete" @click="$emit('close')"></button>
                        </div>
                      </div>
                    </header>
                    <section class="modal-card-body">
                        <slot name="body"></slot>
                    </section>
                    <footer class="modal-card-foot">
                        <slot name="footer">
                            <a class="button is-info is-fullwidth" @click="$emit('close')">Ok</a>
                        </slot>
                    </footer>
                </div>
            </slot>
        </div>
    </transition>
</template>

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

    @media (min-width: 1000px) {
        #video-card {
            width: 840px;
        }

        .ql-video {
            width: 800px;
            height: 450px;
        }
    }

    @media (max-width: 999px) {
        #video-card {
            width: 100%
        }

        .ql-video {
            width: 100%;
            min-height: 240px;
            height: 100%;
        }
    }

    /* IE Problem */
    .modal {
        flex-direction: column;
    }
</style>
