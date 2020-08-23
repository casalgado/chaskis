import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/registro",
    name: "SignIn",
    component: () => import("@/views/SignIn.vue"),
  },
  {
    path: "/upload",
    name: "UploadMedia",
    component: () => import("@/views/UploadMedia.vue"),
  },
  {
    path: "/blog/single",
    name: "PostSingle",
    component: () => import("@/views/PostSingle.vue"),
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

export default router;
