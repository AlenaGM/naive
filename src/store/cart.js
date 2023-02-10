import { defineStore } from "pinia";

export const useCartStore = defineStore("cartStore", {
  state: () => ({
    cart: [],
  }),
  actions: {
    addToCart(artwork, count) {
      const cartIndex = this.cart.findIndex(
        (el) => el.artworkId === artwork.artworkId
      );
      if (cartIndex === -1) {
        this.cart.push({ ...artwork, count });
      }
    },
    deleteFromCart(i) {
      this.cart.splice(i, 1);
    },
  },
});
