<template>
    <single-project-template
    :pageInformation="pageInformation">

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
      }
    };
  }
};
</script>

<style>
</style>
