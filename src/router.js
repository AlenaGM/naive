import { createRouter, createWebHistory } from "vue-router";
import Index from "@/views/Index.vue";
import Artwork from "@/views/Artwork.vue";
import Artist from "@/views/Artist.vue";
import Cart from "@/views/Cart.vue";
import News from "@/views/News.vue";
import HowToOrder from "@/views/HowToOrder.vue";
import Delivery from "@/views/Delivery.vue";
import Contacts from "@/views/Contacts.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/naive/",
      name: "Index",
      component: Index,
    },
    {
      path: "/naive/:artworkId",
      name: "Artwork",
      component: Artwork,
    },
    {
      path: "/naive/artist/:id",
      name: "Artist",
      component: Artist,
    },
    {
      path: "/naive/cart",
      name: "Cart",
      component: Cart,
    },
    {
      path: "/naive/news",
      name: "News",
      component: News,
    },
    {
      path: "/naive/how-to-order",
      name: "HowToOrder",
      component: HowToOrder,
    },
    {
      path: "/naive/delivery",
      name: "Delivery",
      component: Delivery,
    },
    {
      path: "/naive/contacts",
      name: "Contacts",
      component: Contacts,
    },
  ],
});

export default router;
