import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [

  {
    path: "/",
    name: "UserList",
    component: () => import("../views/UserList.vue")
  },
  {
    path: "/",
    name: "UserDetail",
    component: () => import("../views/UserDetail.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
