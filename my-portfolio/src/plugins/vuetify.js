import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

// These fucking themes are not working as they should...
Vue.use(Vuetify, {
  theme: {
    primary: "#00695C",
    secondary: "#004D40",
    accent: "#8D6E63",
    error: "#D50000",
    warning: "#FFC107",
    info: "#2962FF",
    success: "#8BC34A"
  }
});
