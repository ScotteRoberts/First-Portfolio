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
          'This project was the first web-based project any of our team members worked on. Therefore, many of the jobs were shared because most of us stumbled through our way figuring out how to help the project as a whole. That being said, my main role on the team was team lead; I interacted and collaborated with our Project Manager (professor), other team leads and members, and created project structure. During our second semester, our professor introduced a scope creep to each team to simulate a real-life roadblock during development. I took charge of the scope creep, an integration to a mock Single Sign On software. Documentation completed during our year-long project is listed in the "References" section.'
      },
      tutorialReferences: [
        {
          title: "Business Requirements Document",
          author: "Extracurricular Schooling",
          url:
            "https://docs.google.com/document/d/1VsZvJgZ_53YLscDEfC0Zp4nM1qoGhSxIrLJi-nbngZM/edit?usp=sharing",
          dateOfPublication: Date(),
          dateOfRetrieval: Date()
        },
        {
          title: "Technical Specifications",
          author: "Extracurricular Schooling",
          url:
            "https://docs.google.com/document/d/1ozG9tFYHETIPVG032w_iv1Z3cEBuuDoUuh7r4huEgB4/edit?usp=sharing",
          dateOfPublication: Date(),
          dateOfRetrieval: Date()
        },
        {
          title: "Project Plan",
          author: "Extracurricular Schooling",
          url:
            "https://docs.google.com/document/d/1xZ53bNXxsr_PqR4zshn70J5YwQU6y_VS4oRVTOmuXJE/edit?usp=sharing",
          dateOfPublication: Date(),
          dateOfRetrieval: Date()
        },
        {
          title: "Test Plan",
          author: "Extracurricular Schooling",
          url:
            "https://docs.google.com/document/d/1lVgYyRNS_Honv0FKf-e9qW1pdbxcMOmW6OcX_fyjyRY/edit?usp=sharing",
          dateOfPublication: Date(),
          dateOfRetrieval: Date()
        },
        {
          title: "Design Document",
          author: "Extracurricular Schooling",
          url:
            "https://docs.google.com/document/d/15Otd1wm1qvZlQGZgqkRCViHzalTLn0op31Ytk1FOFI8/edit?usp=sharing",
          dateOfPublication: Date(),
          dateOfRetrieval: Date()
        },
        {
          title: "Project Backlog",
          author: "Extracurricular Schooling",
          url:
            "https://docs.google.com/spreadsheets/d/1i1EaYkKc_En9963q8s4Q-po1SsJYgTOLedLOhOz-UMw/edit?usp=sharing",
          dateOfPublication: Date(2018, 1, 22),
          dateOfRetrieval: Date()
        }
      ]
    };
  }
};
</script>

<style>
</style>
