<template>
  <div id="app">
    <div class="container">
      <nav-menu></nav-menu>
      <router-view/>
    </div>
  </div>
</template>

<script>
  import NavMenu from 'components/nav-menu'
  export default {
    name: 'app',
    components: {
      NavMenu
    }
  }
</script>
