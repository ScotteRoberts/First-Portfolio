<template>
  <single-project-template :pageInformation="pageInformation" :tutorialReferences="tutorialReferences" />
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
      },
      tutorialReferences: [
        {
          title: "Business Requirements Document",
          author: "Extracurricular Schooling",
          url:
            "https://docs.google.com/document/d/1VsZvJgZ_53YLscDEfC0Zp4nM1qoGhSxIrLJi-nbngZM/edit?usp=sharing",
          dateOfPub: "N/A",
          dateOfRetrieval: "N/A"
        },
        {
          title: "Technical Specifications",
          author: "Extracurricular Schooling",
          url:
            "https://docs.google.com/document/d/1ozG9tFYHETIPVG032w_iv1Z3cEBuuDoUuh7r4huEgB4/edit?usp=sharing",
          dateOfPub: "N/A",
          dateOfRetrieval: "N/A"
        },
        {
          title: "Project Plan",
          author: "Extracurricular Schooling",
          url:
            "https://docs.google.com/document/d/1xZ53bNXxsr_PqR4zshn70J5YwQU6y_VS4oRVTOmuXJE/edit?usp=sharing",
          dateOfPub: "N/A",
          dateOfRetrieval: "N/A"
        },
        {
          title: "Test Plan",
          author: "Extracurricular Schooling",
          url:
            "https://docs.google.com/document/d/1lVgYyRNS_Honv0FKf-e9qW1pdbxcMOmW6OcX_fyjyRY/edit?usp=sharing",
          dateOfPub: "N/A",
          dateOfRetrieval: "N/A"
        },
        {
          title: "Design Document",
          author: "Extracurricular Schooling",
          url:
            "https://docs.google.com/document/d/15Otd1wm1qvZlQGZgqkRCViHzalTLn0op31Ytk1FOFI8/edit?usp=sharing",
          dateOfPub: "N/A",
          dateOfRetrieval: "N/A"
        }
      ]
    };
  }
};
</script>

<style>
</style>
