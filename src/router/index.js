import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/1",
      name: "1",
      component: () => import("../views/DaySolution1.vue"),
    },
  ],
});

export default router;
