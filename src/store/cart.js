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
      console.log(this.cart);
    },
    deleteFromCart(i) {
      this.cart.splice(i, 1);
    },
  },
});
