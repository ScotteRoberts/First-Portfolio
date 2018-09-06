import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";
import Bulma from "bulma";

Vue.config.productionTip = false;

new Vue({
  router,
  Bulma,
  render: h => h(App)
}).$mount("#app");
