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
        title: "Ransomware",
        description:
          "This project was a crude application of Ransomeware found in the wild. An internet-based delivery mechanism was out of scope for the class, so we developed it as a standalone application, for testing purposes."
      }
    };
  }
};
</script>

<style>
</style>
