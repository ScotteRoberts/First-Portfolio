<template>
  <div class="home">
    <front-page-template
    :carouselItems="carouselItems"/>
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
          // Google or yahoo image... i.ytimg.com
          src: "https://i.ytimg.com/vi/SDfKBI3UKZQ/maxresdefault.jpg",
          text: "Enjoy Life"
        },
        {
          // Imagur: Neil Peart Drum Kit
          src: "https://i.imgur.com/EEimk6t.jpg",
          text: "Motivate Others"
        },
        {
          // Wallpaper Safari: https://wallpapersafari.com/
          src: "https://cdn.wallpapersafari.com/44/25/wWnd8E.jpg",
          text: "Practice Craft"
        },
        {
          // Medium.com
          src:
            "https://cdn-images-1.medium.com/max/1200/1*eOsXGBKBrrTZLkNMoK-JXg.jpeg",
          text: "Work Hard"
        },
        {
          // Wallpaper Safari
          src: "https://cdn.wallpapersafari.com/36/20/8k5UZW.jpg",
          text: "Have Fun"
        }
      ]
    };
  }
};
</script>
