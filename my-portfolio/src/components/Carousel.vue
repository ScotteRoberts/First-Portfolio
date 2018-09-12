<template>
  <div>
    <v-carousel
    :cycle="true">
      <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src">
        <v-container fill-height fluid>
            <v-layout align-center justify-center row fill-height>
              <v-card>
                <!-- Consider when you don't want text, what will you do? -->
                  <v-card-title class="display-3">
                    {{item.text}}
                  </v-card-title>
              </v-card>
            </v-layout>
          </v-container>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      items: [
        {
          // Google or yahoo image... i.ytimg.com
          src: "https://i.ytimg.com/vi/SDfKBI3UKZQ/maxresdefault.jpg",
          text: "Enjoy Life"
        },
        {
          // Imagur: Neil Peart Drum Kit
          src: "https://i.imgur.com/EEimk6t.jpg",
          text: "Work Hard"
        },
        {
          // Wallpaper Safari: https://wallpapersafari.com/
          src: "https://cdn.wallpapersafari.com/44/25/wWnd8E.jpg",
          text: "Have Fun"
        },
        {
          // Medium.com
          src:
            "https://cdn-images-1.medium.com/max/1200/1*eOsXGBKBrrTZLkNMoK-JXg.jpeg",
          text: "Practice Craft"
        },
        {
          // Wallpaper Safari
          src: "https://cdn.wallpapersafari.com/3/28/AsYkz0.jpg",
          text: "Motivate Others"
        }
      ]
    };
  }
};
</script>
