<template>
  <sidebar-left>
    <navbar-simple slot="header" />
    <div slot="contentLeft">
      <contact-card />
    </div>
    <div slot="contentRight">
      <title-text-card slot="contentRight" v-for="(abstraction, index) in lifeAbstractions" :key=index :cardInformation="abstraction" />
    </div>
    <footer-simple slot="footer" />
  </sidebar-left>
</template>

<script>
import NavbarSimple from "@/components/navbars/NavbarSimple";
import FooterSimple from "@/components/navbars/FooterSimple";
import ContactCard from "@/components/cards/ContactCard";
import TitleTextCard from "@/components/cards/TitleTextCard";
import SidebarLeft from "@/layouts/SidebarLeft";
export default {
  components: {
    NavbarSimple,
    FooterSimple,
    ContactCard,
    TitleTextCard,
    SidebarLeft
  },
  props: {
    lifeAbstractions: Array
  }
};
</script>

<style>
</style>
