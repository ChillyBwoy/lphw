import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import { routes } from "@/router/routes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: routes.home(),
      name: "home",
      component: HomeView,
    },
    {
      path: routes.robotList(),
      name: "robotList",
      component: () => import("../views/RobotListView.vue"),
    },
    {
      path: routes.robot(":id"),
      name: "robot",
      component: () => import("../views/RobotView.vue"),
    },
    {
      path: routes.robotCreate(),
      name: "robotCreate",
      component: () => import("../views/RobotCreateView.vue"),
    },
    {
      path: routes.robotEdit(":id"),
      name: "robotEdit",
      component: () => import("../views/RobotEditView.vue"),
    },
  ],
});

export default router;
