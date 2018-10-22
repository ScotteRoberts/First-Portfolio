<template>
  <v-card>
    <h1 style="text-align: center" v-if="references.length > 0">References</h1>
    <v-list>
      <v-list-tile v-for="(reference, index) in references" :key="index" :href="reference.url">
        <v-list-tile-content>
          <v-list-tile-title>
            {{reference.title}}
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-card>
</template>

<script>
export default {
  props: {
    references: Array
  }
};
</script>

<style>
</style>
