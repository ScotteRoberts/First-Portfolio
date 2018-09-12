<template>
    <div>
        <navbar-simple/>
        <contacts-template/>
        <biography-template/>
    </div>
</template>

<script>
import NavbarSimple from "@/components/navbars/NavbarSimple";
import ContactsTemplate from "@/templates/ContactsTemplate";
import BiographyTemplate from "@/templates/BiographyTemplate";
export default {
  components: {
    NavbarSimple,
    ContactsTemplate,
    BiographyTemplate
  }
};
</script>

<style>
</style>
