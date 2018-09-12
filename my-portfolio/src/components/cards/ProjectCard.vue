<template>
  <v-card>
    <v-img
    :src="project.src"
    aspect-ratio=1
  >
    <router-link
    :to="{ name: project.routeName}">
      <v-container fill-height fluid>
        <v-layout align-center justify-center row fill-height>
          <v-flex xs12 flexbox>
            <h3 class="headline white--text">{{project.name}}</h3>
            <p class="subheading white--text">{{project.description}}</p>
          </v-flex>
        </v-layout>
      </v-container>
    </router-link>
  </v-img>
  </v-card>
</template>

<script>
export default {
  props: {
    project: Object
  }
};
</script>

<style>
</style>
