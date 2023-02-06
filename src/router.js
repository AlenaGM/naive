import { createRouter, createWebHistory } from "vue-router";
import Index from "@/views/Index.vue";
import Artwork from "@/views/Artwork.vue";
import Artists from "@/views/Artists.vue";
import Artist from "@/views/Artist.vue";
import News from "@/views/News.vue";
import Delivery from "@/views/Delivery.vue";
import Contacts from "@/views/Contacts.vue";
import Cart from "@/views/Cart.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/naive/",
      name: "Index",
      component: Index,
    },
    {
      path: "/naive/artworks/:artworkId",
      name: "Artwork",
      component: Artwork,
    },
    {
      path: "/naive/artists",
      name: "Artists",
      component: Artists,
    },
    {
      path: "/naive/artists/:id",
      name: "Artist",
      component: Artist,
    },
    {
      path: "/naive/news",
      name: "News",
      component: News,
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
    {
      path: "/naive/cart",
      name: "Cart",
      component: Cart,
    },
  ],
});

export default router;
