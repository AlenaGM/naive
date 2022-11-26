import { createRouter, createWebHistory } from "vue-router";
import Index from "@/views/Index.vue";
import Product from "@/views/Product.vue";
import Artist from "@/views/Artist.vue";
import Cart from "@/views/Cart.vue";
import News from "@/views/News.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index,
    },
    {
      path: "/:id",
      name: "Product",
      component: Product,
    },
    {
      path: "/artist",
      name: "Artist",
      component: Artist,
    },
    {
      path: "/cart",
      name: "Cart",
      component: Cart,
    },
    {
      path: "/news",
      name: "News",
      component: News,
    },
  ],
});

export default router;
