<template>
  <v-toolbar>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat :to="{ name: 'home' }">Scott Roberts</v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>
    
    <v-toolbar-items class="hidden-sm-and-down">
      <!-- https://stackoverflow.com/questions/47586022/router-link-with-vue-and-vuetify-confusion -->
      <v-btn flat :to="{ name: 'about' }">About</v-btn>
      <v-btn flat :to="{ name: 'projects'}">Projects</v-btn>
      <v-btn flat :to="{ name: 'resume' }">Resume</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  data: function() {
    return {};
  }
};
</script>
