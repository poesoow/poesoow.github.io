<template>
  <router-view></router-view>
  <NavMenu></NavMenu>
</template>

<script>
import NavMenu from './components/Nav.vue'

export default {
  name: 'App',
  components: {
    NavMenu
  }
}
</script>

<style>

</style>
