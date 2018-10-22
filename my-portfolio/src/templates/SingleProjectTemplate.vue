<template>
  <tutorial-layout>
    <navbar-simple slot="header" />
    <h1 slot="pageTitle">
      {{pageInformation.title}}
    </h1>
    <p slot="pageDescription">
      {{pageInformation.description}}
    </p>
    <tutorial-card slot="tutorial" />
    <reference-card slot="pageReferences" :references="tutorialReferences" />
    <footer-simple slot="footer" />
  </tutorial-layout>
</template>

<script>
import NavbarSimple from "@/components/navbars/NavbarSimple";
import FooterSimple from "@/components/navbars/FooterSimple";
import ReferenceCard from "@/components/cards/ReferenceCard";
import TutorialCard from "@/components/cards/TutorialCard";
import TutorialLayout from "@/layouts/TutorialLayout";
export default {
  components: {
    NavbarSimple,
    FooterSimple,
    ReferenceCard,
    TutorialCard,
    TutorialLayout
  },
  props: {
    pageInformation: Object,
    tutorialReferences: Array
  }
};
</script>
