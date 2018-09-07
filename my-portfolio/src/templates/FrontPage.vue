<template>
  <div>
    <navbar-simple/>
    <hello-world/>
  </div>
</template>

<script>
import NavbarSimple from "@/components/navbars/NavbarSimple";
import HelloWorld from "@/components/HelloWorld";
export default {
  components: {
    NavbarSimple,
    HelloWorld
  }
};
</script>
