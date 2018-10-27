<template>
  <sidebar-left>
    <navbar-simple slot="header" />
    <div slot="contentLeft">
      <contact-card :cardInformation="contactInformation" />
    </div>
    <div slot="contentRight">
      <title-text-card v-for="(abstraction, index) in lifeAbstractions" :key=index :cardInformation="abstraction" />
      <reference-card :references="references" />
    </div>
    <footer-simple slot="footer" />
  </sidebar-left>
</template>

<script>
import NavbarSimple from "@/components/navbars/NavbarSimple";
import FooterSimple from "@/components/navbars/FooterSimple";
import ContactCard from "@/components/cards/ContactCard";
import ReferenceCard from "@/components/cards/ReferenceCard";
import TitleTextCard from "@/components/cards/TitleTextCard";
import SidebarLeft from "@/layouts/SidebarLeft";
export default {
  components: {
    NavbarSimple,
    FooterSimple,
    ContactCard,
    ReferenceCard,
    TitleTextCard,
    SidebarLeft
  },
  props: {
    contactInformation: Object,
    lifeAbstractions: Array,
    references: Array
  }
};
</script>

<style>
</style>
