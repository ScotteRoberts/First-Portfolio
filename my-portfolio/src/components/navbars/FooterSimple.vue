<template>
  <v-footer
    height="auto"
  >
    <v-card
      class="green white--text flex"
    >
      <v-card-text class="white--text">
        &copy; {{copyright.year}} -- <b>{{copyright.owner}}</b>
        <v-btn 
          v-for="(socialMediaIcon, index) in socialMediaIcons"
          :key=index
          :href="socialMediaIcon.link"
          class="small white--text"
          fab
          icon
        >
          <v-icon>
            {{ socialMediaIcon.icon }}
          </v-icon>
        </v-btn>

      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: function() {
    return {
      copyright: {
        year: "2018",
        owner: "Scott Roberts"
      },
      socialMediaIcons: [
        {
          icon: "fab fa-github",
          link: "https://github.com/ScotteRoberts"
        },
        {
          icon: "fab fa-linkedin",
          link: "https://www.linkedin.com/in/scott-e-roberts"
        }
      ]
    };
  }
};
</script>
