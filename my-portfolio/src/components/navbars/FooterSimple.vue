<template>
  <v-footer app height="auto">
    <v-card class="secondary flex">
      <v-card-text>
        <strong class="subheading white--text">&copy;{{copyright.year}} — <b>{{copyright.owner}}</b></strong>
        <v-btn v-for="(socialMediaIcon, index) in socialMediaIcons" :key="index" :href="socialMediaIcon.link" dark icon>
          <v-icon size="24px">{{ socialMediaIcon.icon }}</v-icon>
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
