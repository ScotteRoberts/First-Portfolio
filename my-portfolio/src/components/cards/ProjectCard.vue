<template>
  <v-hover>
    <v-card slot-scope="{ hover }" class="ma-2" :class="`elevation-${hover ? 12 : 2}`">
      <v-img :src="project.src" width=300px height=300px aspect-ratio=1>
        <router-link :to="{ name: project.routeName}">
          <v-container fill-height fluid>
            <v-layout align-center justify-center>
              <v-flex flexbox>
                <div class="headline primary white--text">{{project.name}}</div><br />
                <div class="subheading primary white--text">{{project.description}}</div>
              </v-flex>
            </v-layout>
          </v-container>
        </router-link>
      </v-img>
    </v-card>
  </v-hover>
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
