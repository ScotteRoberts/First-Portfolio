<template>
    <sidebar-left>
      <navbar-simple slot="header"/>
      <div slot="contentLeft">
        <contact-card/>
      </div>
      <div slot="contentRight">
        <contact-card/>
      </div>
      <footer-simple slot="footer"/>
    </sidebar-left>
</template>

<script>
import NavbarSimple from "@/components/navbars/NavbarSimple";
import FooterSimple from "@/components/navbars/FooterSimple";
import ContactCard from "@/components/cards/ContactCard";
import SidebarLeft from "@/layouts/SidebarLeft";
export default {
  components: {
    NavbarSimple,
    FooterSimple,
    ContactCard,
    SidebarLeft
  }
};
</script>

<style>
</style>
