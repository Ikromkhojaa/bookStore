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
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/books",
      component: () => import("@/views/book-about/index.vue"),
    },
    {
      path: "/books/:slug",
      name: "book-slug",
      component: () => import("@/views/book-about/_slug.vue"),
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("@/views/CartPage.vue"),
    },
    {
      path: "/like",
      name: "like",
      component: () => import("@/views/LikeCart.vue"),
    },
  ],
});

export default router;
