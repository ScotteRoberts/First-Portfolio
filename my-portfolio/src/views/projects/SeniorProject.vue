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
        title: "Extracurricular Schooling",
        description:
          "This project was the first web-based project any of our team members worked on. Therefore, many of the jobs were shared because most of us stumbled through our way figuring out how to help the project as a whole. That being said, my main role on the team was being the team lead. Some of the requirements of that role were:"
      }
    };
  }
};
</script>

<style>
</style>
