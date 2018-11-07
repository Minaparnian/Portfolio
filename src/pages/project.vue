<template>
    <div class="container has-text-centered">
        <div class="column is-6 is-offset-3">
            <h1 class="title">
                Ppp Coming Soon
            </h1>
            <h2 class="subtitle">
                $this is the best software platform for running an internet business. We handle billions of dollars every year for forward-thinking businesses around the world.
            </h2>
        </div>
        <div class="container portfolio-container">
        <div class="columns is-multiline">
          <div class="column is-4" v-for="(project, key) in projects" :key="key">
            <div class="card">
              <header class="card-header">
                <p class="card-header-title">
                  <span v-text="project.title"></span>
                </p>
              </header>
              <div class="card-content">
                <figure class="image">
                  <img :src="project.img" alt="modal-cards template screenshot">
                </figure>
              </div>
              <footer class="card-footer">
                <a :href="project.previewLink" class="card-footer-item">Preview</a>
                <a :href="project.githubLink" class="card-footer-item">Source
                  Code</a>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
export default {
  name: 'projects',
  data: () => ({
    projects: [
      {title: 'ChillOut', img: 'static/dit-lp.jpg', previewLink: 'https://chillout-app.herokuapp.com', githubLink: 'https://github.com/Minaparnian/chillOut'},
      {title: 'Adventurous', img: 'static/dit-lp.jpg', previewLink: 'https://dry-mesa-99000.herokuapp.com/', githubLink: 'https://github.com/Minaparnian/Adventurous'},
      {title: 'Tic-Tac-Toe', img: 'static/dit-lp.jpg', previewLink: 'https://minaparnian.github.io/tictactoe/', githubLink: 'https://github.com/Minaparnian/tictact'},
      {title: 'ChillOut', img: 'static/dit-lp.jpg', previewLink: 'https://chillout-app.herokuapp.com', githubLink: 'https://github.com/Minaparnian/chillOut'},
      {title: 'ChillOut', img: 'static/dit-lp.jpg', previewLink: 'https://chillout-app.herokuapp.com', githubLink: 'https://github.com/Minaparnian/chillOut'},
      {title: 'ChillOut', img: 'static/dit-lp.jpg', previewLink: 'https://chillout-app.herokuapp.com', githubLink: 'https://github.com/Minaparnian/chillOut'}
    ]
  })
}
</script>

<style>
.portfolio-container .card {
  margin-bottom: 2em;
}
</style>
