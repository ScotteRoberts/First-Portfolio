<template>
  <div class="home">
    <front-page-template :carouselItems="carouselItems" />
  </div>
</template>

<script>
import FrontPageTemplate from "@/templates/FrontPageTemplate";

export default {
  name: "home",
  components: {
    FrontPageTemplate
  },
  data: function() {
    return {
      carouselItems: [
        {
          // Reason for needing Require is because of webpack not understanding the javascript url
          // https://stackoverflow.com/questions/43447753/vue-js-assets-filepath-when-using-v-for#43448974
          src: require("@/assets/img/HuntingtonBeachPierDusk.jpg"),
          text: "Enjoy Life"
        },
        {
          // Imagur: Neil Peart Drum Kit
          src: require("@/assets/img/NeilPeartDrumSet.jpg"),
          text: "Motivate Others"
        },
        {
          // Wallpaper Safari: https://wallpapersafari.com/
          src: require("@/assets/img/CodeWall.jpg"),
          text: "Practice Craft"
        },
        {
          // Medium.com
          src: require("@/assets/img/MacOnWoodTable.jpeg"),
          text: "Work Hard"
        },
        {
          // Wallpaper Safari
          src: require("@/assets/img/ClassicVideoGameControllers.jpg"),
          text: "Have Fun"
        }
      ]
    };
  }
};
</script>
