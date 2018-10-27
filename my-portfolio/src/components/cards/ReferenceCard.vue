<template>
  <v-card v-if="references.length > 0">
    <v-card-title>
      <span class='display-1'>References</span>
    </v-card-title>
    <v-list>
      <v-list-tile v-for="(reference, index) in references" :key="index" :href="reference.url">
        <v-list-tile-content>
          <v-list-tile-title>
            {{reference.author}} - {{reference.title}}
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
