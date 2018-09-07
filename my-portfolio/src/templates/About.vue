<template>
    <div>
        <navbar-simple/>
        <contacts/>
        <biography-simple/>
    </div>
</template>

<script>
import NavbarSimple from "@/components/navbars/NavbarSimple";
import Contacts from "@/templates/Contacts";
import BiographySimple from "@/templates/BiographySimple";
export default {
  components: {
    NavbarSimple,
    Contacts,
    BiographySimple
  }
};
</script>

<style>
</style>
