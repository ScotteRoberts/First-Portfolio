// Global imports
import "@babel/polyfill"; //
import Vue from "vue"; // Vue Integration
import App from "./App.vue"; // Application Entry point in HTML
import router from "./router"; // Vue-router Integration point
import "./plugins/vuetify"; // Vue CLI Plugin - Vuetify
import "@fortawesome/fontawesome-free/css/all.css"; // Font Awesome Icons Integration
import "./registerServiceWorker"; // PWA integration

Vue.config.productionTip = false;

// Install globablly under "app"
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
