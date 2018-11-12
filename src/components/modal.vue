<template>
  <div class="container has-text-centered">
    <div class="column is-6 is-offset-3">
      {{ project }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Project',
  data () {
    return {
      project: this.$routes.params.id
    }
  }
}
</script>

<style>
</style>
