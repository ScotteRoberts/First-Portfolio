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
        import(/* webpackChunkName: "about" */ "./views/About.vue"),

      meta: {
        title: "About | Scott Roberts"
      },
      beforeEnter: function(to, from, next) {
        document.title = to.meta.title;
        next();
      }
    },
    {
      path: "/",
      name: "home",
      component: () => import("./views/Home.vue"),
      meta: {
        title: "Home | Scott Roberts"
      },
      beforeEnter: function(to, from, next) {
        document.title = to.meta.title;
        next();
      }
    },
    {
      path: "/projects",
      name: "projects",
      component: () => import("./views/Projects.vue"),
      meta: {
        title: "Projects | Scott Roberts"
      },
      beforeEnter: function(to, from, next) {
        document.title = to.meta.title;
        next();
      }
    },
    {
      path: "/projects/ransomware",
      name: "ransomware",
      component: () => import("./views/Ransomware.vue"),
      meta: {
        title: "Ransomware | Scott Roberts"
      },
      beforeEnter: function(to, from, next) {
        document.title = to.meta.title;
        next();
      }
    },
    {
      path: "/resume",
      name: "resume",
      component: () => import("./views/Resume.vue"),
      meta: {
        title: "Resume | Scott Roberts"
      },
      beforeEnter: function(to, from, next) {
        document.title = to.meta.title;
        next();
      }
    },
    {
      path: "/projects/senior-project",
      name: "senior-project",
      component: () => import("./views/SeniorProject.vue"),
      meta: {
        title: "Senior Project | Scott Roberts"
      },
      beforeEnter: function(to, from, next) {
        document.title = to.meta.title;
        next();
      }
    },
    {
      path: "/projects/swim-mill",
      name: "swim-mill",
      component: () => import("./views/SwimMill.vue"),
      meta: {
        title: "Swim Mill | Scott Roberts"
      },
      beforeEnter: function(to, from, next) {
        document.title = to.meta.title;
        next();
      }
    },
    {
      path: "/projects/unity-tactics",
      name: "unity-tactics",
      component: () => import("./views/UnityTactics.vue"),
      meta: {
        title: "Unity Tactics | Scott Roberts"
      },
      beforeEnter: function(to, from, next) {
        document.title = to.meta.title;
        next();
      }
    }
  ]
});
