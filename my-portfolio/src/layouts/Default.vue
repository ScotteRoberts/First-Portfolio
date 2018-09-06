<template>
  <div class="navbar is-transparent" id="nav">
    <router-link to="/about">About</router-link> |
    <router-link to="/">Home</router-link> |
    <router-link to="/ransomware">Mock Ransomware</router-link> |
    <router-link to="/senior-project">Senior Project</router-link> |
    <router-link to="/swim-mill">Swim Mill</router-link> |
    <router-link to="/fire-emblem">Unity Tactics (Fire Emblem)</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  components: {
  }
}
</script>

<style lang="scss">
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
