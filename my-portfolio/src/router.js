import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/fire-emblem",
      name: "fire-emblem",
      component: () => import("./views/FireEmblem.vue")
    },
    {
      path: "/",
      name: "home",
      component: () => import("./views/Home.vue")
    },
    {
      path: "/ransomware",
      name: "ransomware",
      component: () => import("./views/Ransomware.vue")
    },
    {
      path: "/senior-project",
      name: "senior-project",
      component: () => import("./views/SeniorProject.vue")
    },
    {
      path: "/swim-mill",
      name: "swim-mill",
      component: () => import("./views/SwimMill.vue")
    }
  ]
});
