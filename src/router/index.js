import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "index",
      component: () => import("../views/Index.vue"),
    },
    {
      path: "/1",
      name: "1",
      component: () => import("../views/DayNumber1.vue"),
    },
  ],
});

export default router;
