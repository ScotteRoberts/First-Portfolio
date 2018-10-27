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
        title: "Unity Tactics",
        description:
          "This is a classic Tactical Role-Playing Game (TRPG) using a turn-based system. This game is a rip off version of Fire Emblem: The Blazing Blade. All created content belongs to its rightful owners. This game is a non-commercial, personal project."
      },
      tutorialReferences: [
        {
          title: "Design Document",
          author: "Scott Roberts",
          url:
            "https://docs.google.com/document/d/1CDzA_EAbwY8NS9ETmX75wOjMcesFpqMPB7vQRuEgwLY/edit?usp=sharing",
          dateOfPublication: Date(2018, 7, 27),
          dateOfRetrieval: Date()
        },
        {
          title: "Project Backlog",
          author: "Scott Roberts",
          url:
            "https://docs.google.com/spreadsheets/d/1IU9QMoftwIIPUyH_9ff8ln8Eb9qKY5NH24Q_h3SOyY0/edit?usp=sharing",
          dateOfPublication: Date(2018, 8, 1),
          dateOfRetrieval: Date()
        }
      ]
    };
  }
};
</script>

<style>
</style>
