<template>
  <v-card>
    <!-- DEV: Image is hardcoded to be 300 x 200... check this out later -->
    <v-img class="white--text" :aspect-ratio="cardInformation.aspectRatio" :src="cardInformation.img" />
    <v-card-title>
      <div>
        <span class="grey--text">Contact Information</span><br>
        <span>{{cardInformation.email}}</span><br>
        <span>{{cardInformation.mobilePhone}}</span>
      </div>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  props: {
    cardInformation: Object
  }
};
</script>

<style>
</style>
