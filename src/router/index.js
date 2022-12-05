import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: {name: "home"}
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/todoapp",
    name: "todoapp",
    component: () => import("@/views/TodoView.vue"),
  },
  {
    path: "/lesson2",
    name: "lesson2",
    component: () => import("@/views/LessonView2.vue"),
  },
  {
    path: "/lesson3",
    name: "lesson3",
    component: () => import("@/views/LessonView3.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
