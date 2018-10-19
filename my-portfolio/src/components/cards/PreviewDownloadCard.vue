<template>
  <v-hover>
    <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`">
      <v-card-title>
        <!-- Not functional yet... -->
        <a class='headline' :href="cardInformation.downloadLink" :download="cardInformation.title">{{cardInformation.title}}</a>
        <v-spacer></v-spacer>
        <v-card-actions>
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card-title>
      <!-- TODO: Fix Hardcoded Images. SrcSet might be a good option for different images -->
      <v-img v-show="show" :src="cardInformation.img" :aspect-ratio="cardInformation.aspectRatio" />
    </v-card>
  </v-hover>
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
