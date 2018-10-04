<template>
  <multiple-projects-template :pageInformation="pageInformation" :projects="projects" />
</template>

<script>
import MultipleProjectsTemplate from "@/templates/MultipleProjectsTemplate";
export default {
  components: {
    MultipleProjectsTemplate
  },
  data: function() {
    return {
      pageInformation: {
        title: "Projects",
        description:
          "Some of the better projects I have done over the past year."
      },
      projects: [
        {
          src: require("@/assets/img/ECS_Screenshot.png"),
          // name: "Extracurricular Schooling",
          // description: "Senior project | web app",
          routeName: "senior-project"
        },
        {
          src: require("@/assets/img/PythonProgrammingIcon.png"),
          name: "Ransomware",
          description: "Security project | standalone App",
          routeName: "ransomware"
        },
        {
          src: require("@/assets/img/SwimMillScreenshot.png"),
          name: "Swim Mill",
          description: "OS project | standlone App",
          routeName: "swim-mill"
        },
        {
          src: require("@/assets/img/FireEmblemMap.png"),
          name: "Unity Tactics",
          description: "Unity game | standalone app",
          routeName: "unity-tactics"
        }
      ]
    };
  }
};
</script>

<style>
</style>
