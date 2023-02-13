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
      path: "/",
      name: "Index",
      component: Index,
    },
    {
      path: "/artworks/:artworkId",
      name: "Artwork",
      component: Artwork,
    },
    {
      path: "/artists",
      name: "Artists",
      component: Artists,
    },
    {
      path: "/artists/:id",
      name: "Artist",
      component: Artist,
    },
    {
      path: "/news",
      name: "News",
      component: News,
    },
    {
      path: "/delivery",
      name: "Delivery",
      component: Delivery,
    },
    {
      path: "/contacts",
      name: "Contacts",
      component: Contacts,
    },
    {
      path: "/cart",
      name: "Cart",
      component: Cart,
    },
  ],
});

export default router;
