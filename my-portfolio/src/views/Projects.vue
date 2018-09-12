<template>
    <multiple-projects-template
    :pageInformation="pageInformation"
    :projects="projects"
    />
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
          src:
            "http://wallpapercave.net/images/samsung-galaxy-default-wallpaper/samsung-galaxy-default-wallpaper-18.jpg",

          name: "Extracurricular Schooling",
          description: "Senior project | web app",
          routeName: "senior-project"
        },
        {
          src:
            "http://wallpapercave.net/images/samsung-galaxy-default-wallpaper/samsung-galaxy-default-wallpaper-18.jpg",
          name: "Ransomware",
          description: "Security project | standalone App",
          routeName: "ransomware"
        },
        {
          src:
            "http://wallpapercave.net/images/samsung-galaxy-default-wallpaper/samsung-galaxy-default-wallpaper-18.jpg",
          name: "Swim Mill",
          description: "OS project | standlone App",
          routeName: "swim-mill"
        },
        {
          src:
            "http://wallpapercave.net/images/samsung-galaxy-default-wallpaper/samsung-galaxy-default-wallpaper-18.jpg",
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
