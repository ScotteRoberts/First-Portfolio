import "@babel/polyfill"; //
import Vue from "vue"; // Vue Integration
import "@fortawesome/fontawesome-free/css/all.css"; // Font Awesome Icons Integration
import "./plugins/vuetify"; // Vue-Cli-Vuetify Plugin
import App from "./App.vue"; // Application Entry point in HTML
import router from "./router"; // Vue-router Integration point
import "./registerServiceWorker"; // PWA integration
import Bulma from "bulma"; // Bulma integration

Vue.config.productionTip = false;

// Install globablly under "app"
new Vue({
  router,
  Bulma,
  render: h => h(App)
}).$mount("#app");
