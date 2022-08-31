<script>
import { RouterLink, RouterView } from 'vue-router'
import Landing from './components/Landing.vue'
import Header from './components/Header.vue'

export default {
  components: {
    Landing,
    Header
  }
}
</script>

<template>

  <Header />
  <Landing />

  <RouterView />
</template>

<style scoped>

</style>
