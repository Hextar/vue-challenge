import Vue from "vue";
import VueRouter from "vue-router";
import Homepage from "@/pages/Homepage";
import store from "@/store";

Vue.use(VueRouter);

// eslint-disable-next-line no-unused-vars
const isAuthenticatedGuard = (to, from, next) => {
  console.log(store.getters.isAuthenticated);
};

const routes = [
  {
    path: "/",
    name: "Homepage",
    component: Homepage,
    meta: {
      title: "Homepage",
      metaTags: [
        {
          name: "description",
          content: "The homepage."
        },
        {
          property: "og:description",
          content: "The homepage."
        }
      ]
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes
});

export default router;
