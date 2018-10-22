<template>
  <single-project-template :pageInformation="pageInformation">

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
      }
    };
  }
};
</script>

<style>
</style>
