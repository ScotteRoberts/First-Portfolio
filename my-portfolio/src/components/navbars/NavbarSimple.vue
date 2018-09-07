<template>
  <div class="border">
    <nav class="navbar is-primary">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          Scott Roberts
        </router-link>
        <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <!-- The is-active is making the hamburger menu open automatically, need js to open and close it. -->
      <div class="navbar-menu is-active">
        <div class="navbar-end">
          <router-link class="navbar-item" to="/about">
            About
          </router-link>
          <div class="navbar-item has-dropdown is-hoverable">
            <!-- The projects page is not mounting for some reason. -->
            <router-link class="navbar-link" to="/projects">
              Projects
            </router-link>
            <div class="navbar-dropdown is-boxed">
              <router-link class="navbar-item" to="/projects/ransomware">
                Ransomware
              </router-link>
              <router-link class="navbar-item" to="/projects/senior-project">
                Senior Project
              </router-link>
              <router-link class="navbar-item" to="/projects/swim-mill">
                Swim Mill
              </router-link>
              <router-link class="navbar-item" to="/projects/unity-tactics">
                Unity Tactics
              </router-link>
            </div>
          </div>
          <router-link class="navbar-item" to="/resume">
            Resume
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.border {
  padding-bottom: 1em;
}
</style>


