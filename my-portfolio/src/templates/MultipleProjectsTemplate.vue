<template>
    <headline-and-gallary-layout>
      <navbar-simple slot="header"/>
      <h1 slot="pageTitle">
        {{pageInformation.title}}
      </h1>
      <p slot="pageDescription">
        {{pageInformation.description}}
      </p>
      <project-card 
      slot="displayItem"
      v-for="(project, index) in projects"
      :key=index
      :project="project">
      </project-card>
     
      
      <footer-simple slot="footer"/>
    </headline-and-gallary-layout>
</template>

<script>
import NavbarSimple from "@/components/navbars/NavbarSimple";
import ProjectCard from "@/components/cards/ProjectCard";
import FooterSimple from "@/components/navbars/FooterSimple";
import HeadlineAndGallaryLayout from "@/layouts/HeadlineAndGallaryLayout";

export default {
  components: {
    NavbarSimple,
    ProjectCard,
    FooterSimple,
    HeadlineAndGallaryLayout
  },
  props: {
    pageInformation: Object,
    projects: Array
  }
};
</script>

<style>
</style>
