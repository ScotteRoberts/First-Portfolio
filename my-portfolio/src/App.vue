<template>
  <div id="app">
    <default-layout/>
  </div>
</template>

<script>
import DefaultLayout from "@/layouts/Default"
export default {
  components: {
    DefaultLayout
  }
}
</script>


<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
