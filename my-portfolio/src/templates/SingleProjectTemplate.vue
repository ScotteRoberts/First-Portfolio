<template>
  <tutorial-layout>
    <navbar-simple slot="header" />
    <h1 slot="pageTitle">
      {{pageInformation.title}}
    </h1>
    <p slot="pageDescription">
      {{pageInformation.description}}
    </p>
    <h1 slot="tutorial">
      Tutorial Slot... Description coming soon.
    </h1>
    <footer-simple slot="footer" />
  </tutorial-layout>
</template>

<script>
import NavbarSimple from "@/components/navbars/NavbarSimple";
import FooterSimple from "@/components/navbars/FooterSimple";
import TutorialLayout from "@/layouts/TutorialLayout";
export default {
  components: {
    NavbarSimple,
    FooterSimple,
    TutorialLayout
  },
  props: {
    pageInformation: Object
  }
};
</script>
