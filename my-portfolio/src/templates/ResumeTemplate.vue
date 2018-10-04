<template>
  <gallary-single-column-layout>
    <navbar-simple slot="header" />
    <preview-download-card slot="displayItem" v-for="(resume, index) in resumeItems" :key=index :cardInformation="resume" />
    <footer-simple slot="footer" />
  </gallary-single-column-layout>
</template>

<script>
import NavbarSimple from "@/components/navbars/NavbarSimple";
import FooterSimple from "@/components/navbars/FooterSimple";
import PreviewDownloadCard from "@/components/cards/PreviewDownloadCard";
import GallarySingleColumnLayout from "@/layouts/GallarySingleColumnLayout";
export default {
  components: {
    NavbarSimple,
    FooterSimple,
    PreviewDownloadCard,
    GallarySingleColumnLayout
  },
  props: {
    resumeItems: Array
  }
};
</script>

<style>
</style>
