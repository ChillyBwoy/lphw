import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/robots",
      name: "robotList",
      component: () => import("../views/RobotListView.vue"),
    },
    {
      path: "/robots/show/:id",
      name: "robot",
      component: () => import("../views/RobotView.vue"),
    },
    {
      path: "/robots/create",
      name: "robotCreate",
      component: () => import("../views/RobotCreateView.vue"),
    },
    {
      path: "/robots/:id/edit",
      name: "robotEdit",
      component: () => import("../views/RobotEditView.vue"),
    },
  ],
});

export default router;
