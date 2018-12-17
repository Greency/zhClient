<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './view/Header.vue'

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style lang="stylus" scoped>
@import 'assets/css/app.css';
</style>
