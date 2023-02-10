import { defineStore } from "pinia";

export const useCartStore = defineStore("cartStore", {
  state: () => ({
    cart: [],
  }),
  actions: {
    addToCart(artwork) {
      const cartIndex = this.cart.findIndex(
        (el) => el.artworkId === artwork.artworkId
      );
      if (cartIndex === -1) {
        this.cart.push({ ...artwork });
      }
    },
    deleteFromCart(index) {
      this.cart.splice(index, 1);
    },
  },
});
