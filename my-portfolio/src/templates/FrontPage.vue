<template>
  <div>
    <navbar-simple/>
    <carousel/>
  </div>
</template>

<script>
import NavbarSimple from "@/components/navbars/NavbarSimple";
import HelloWorld from "@/components/HelloWorld";
import Carousel from "@/components/Carousel";
export default {
  components: {
    NavbarSimple,
    HelloWorld,
    Carousel
  }
};
</script>
