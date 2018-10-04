<template>
  <v-card>
    <v-card-title>
      <span class='display-1'>{{cardInformation.title}}</span>
      <v-spacer></v-spacer>
      <v-card-actions>
        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card-title>
    <v-card-text v-show="show">
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
  data: function() {
    return {
      show: false
    };
  },
  props: {
    cardInformation: Object
  }
};
</script>

<style>
</style>
