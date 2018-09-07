<template>
  <div class="home">
    <front-page/>
  </div>
</template>

<script>
import FrontPage from "@/templates/FrontPage";

export default {
  name: "home",
  components: {
    FrontPage
  }
};
</script>

<style lang="scss">
.home {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
