<template>
  <single-project-template :pageInformation="pageInformation" :tutorialReferences="tutorialReferences">
  </single-project-template>
</template>

<script>
import SingleProjectTemplate from "@/templates/SingleProjectTemplate";
export default {
  components: {
    SingleProjectTemplate
  },
  data: function() {
    return {
      pageInformation: {
        title: "Ransomware",
        description:
          "This project was a crude application of Ransomware found in the wild. An internet-based delivery mechanism was out of scope for the class, so we developed it as a standalone application, for testing purposes."
      },
      tutorialReferences: [
        {
          title: "Ransomware Repository",
          author: "Scott Roberts",
          url: "https://github.com/ScotteRoberts/CECS378-Security",
          dateOfPublication: Date(2017, 9, 21),
          dateOfRetrieval: Date()
        }
      ]
    };
  }
};
</script>

<style>
</style>
