<template>
  <div>
    <navbar-simple/>
    <div class="body">
      <h3 class="title">
        {{ pageTitle }}
      </h3>
    </div>
  </div>
</template>

<script>
import NavbarSimple from "@/components/navbars/NavbarSimple";
export default {
  components: {
    NavbarSimple
  },
  data: function() {
    return {
      pageTitle: "Default Page Title"
    };
  }
};
</script>

<style>
</style>
