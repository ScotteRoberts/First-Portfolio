<template>
  <v-toolbar 
  dark 
  class="primary">
    <v-btn flat :to="{ name: 'home' }">
      <v-list-tile avatar>
      <v-list-tile-avatar>
        <img src="../../../public/img/ScottRoberts_Aquatics_Oct24-2.jpg">
      </v-list-tile-avatar>

      <v-list-tile-content>
        <v-list-tile-title>Scott Roberts</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
    </v-btn>
    

    <v-spacer></v-spacer>
    
    <v-toolbar-items class="hidden-sm-and-down">
      <!-- https://stackoverflow.com/questions/47586022/router-link-with-vue-and-vuetify-confusion -->
      <v-btn v-for="(navLink, index) in navLinks"
      :key="index"
      :to="{ name: navLink.routeName }"
      flat 
      >
        {{navLink.displayName}}
      </v-btn>
    </v-toolbar-items>
    <v-menu bottom left class="hidden-md-and-up">
            <v-btn
              slot="activator"
              icon
            >
              <v-icon>more_vert</v-icon>
            </v-btn>

            <v-list>
              <v-list-tile
                v-for="(navLink, index) in navLinks"
                :key="index"
                :to="{ name: navLink.routeName }"
              >
                <v-list-tile-title>{{ navLink.displayName }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
  </v-toolbar>
</template>

<script>
export default {
  data: () => ({
    navLinks: [
      {
        displayName: "About",
        routeName: "about"
      },
      {
        displayName: "Projects",
        routeName: "projects"
      },
      {
        displayName: "Resume",
        routeName: "resume"
      }
    ]
  })
};
</script>
