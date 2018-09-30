<template>
  <!-- Entry point for main application -->
  <div id="app">
    <v-app>
      <!-- Displays a "view" from the view folder -->
      <router-view />
    </v-app>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
