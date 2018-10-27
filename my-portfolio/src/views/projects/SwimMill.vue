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
        title: "Swim Mill",
        description:
          "Threads, and multithreding by extension, is a popular concept in many of the CSULB operating system courses. Our class created an application that simulates a fish swimming in a 'Swim Mill' to eat food dropped upstream. The three threads 'FISH', 'SWIM MILL' and 'PELLET' (food) work with shared memory to direct the fish to the location of each pellet."
      },
      tutorialReferences: [
        {
          title: "Swim Mill Repository",
          author: "Scott Roberts",
          url: "https://github.com/ScotteRoberts/CECS326-Operating-Systems",
          dateOfPublication: Date(2017, 11, 6),
          dateOfRetrieval: Date()
        }
      ]
    };
  }
};
</script>

<style>
</style>
