<template>
  <base-layout>
    <navbar-simple slot="header" />
    <carousel slot="content" :carouselItems="carouselItems" />
    <footer-simple slot="footer" />
  </base-layout>
</template>

<script>
import BaseLayout from "@/layouts/BaseLayout";
import NavbarSimple from "@/components/navbars/NavbarSimple";
import Carousel from "@/components/Carousel";
import FooterSimple from "@/components/navbars/FooterSimple";
export default {
  components: {
    BaseLayout,
    NavbarSimple,
    Carousel,
    FooterSimple
  },
  props: {
    carouselItems: Array
  }
};
</script>
