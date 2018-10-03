<template>
  <v-card>
    <v-card-title>
      <span class='display-1'>{{cardInformation.title}}</span>
    </v-card-title>
    <v-card-text>
      <div v-for="(informationItem, index) in cardInformation.paragraphs" :key=index>
        <span class='title'>
          {{informationItem.subtitle}}
        </span>
        <p>
          {{informationItem.text}}
        </p>
      </div>
    </v-card-text>
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
