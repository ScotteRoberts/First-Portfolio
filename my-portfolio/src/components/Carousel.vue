<template>
  <v-carousel :cycle="true">
    <v-carousel-item v-for="(item,i) in carouselItems" :key="i" :src="item.src">
      <v-container fill-height fluid>
        <v-layout align-center justify-center row fill-height>
          <v-card>
            <!-- Consider when you don't want text, what will you do? -->
            <v-card-title class="display-1">
              {{item.text}}
            </v-card-title>
          </v-card>
        </v-layout>
      </v-container>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  props: {
    carouselItems: Object
  }
};
</script>
