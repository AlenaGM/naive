<template>
  <div class="cart">
    <h2 class="cart__title">корзина</h2>
    <div class="cart__table">
      <div class="cart__table_head">head</div>
      <div class="cart__table_row">
        <div class="cart__table_column">column</div>
      </div>
      <div class="cart__table_total">total</div>
    </div>
    <div class="cart__order">ОФОРМИТЬ ЗАКАЗ</div>
    <div v-for="artwork of cartStore.cart">
      <img :src="artwork.thumbnail" />
      <div>{{ artwork.title }}</div>
      <div>{{ artwork.artistName }}</div>
      <div>{{ artwork.created }}</div>
      <div>{{ artwork.price }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useCartStore } from "@/store/cart.js";

const cartStore = useCartStore();
</script>

<style lang="scss" scoped>
.cart {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (max-width: 1092px) {
    align-items: center;
  }
  &__title {
    font-size: 2rem;
    font-weight: 600;
    line-height: 90%;
    text-transform: uppercase;
    margin: 60px 0 34px 0;
    @media screen and (max-width: 400px) {
      font-size: 1.5rem;
      margin: 30px 0 17px 0;
    }
  }
  &__table {
    display: grid;
    align-items: start;
    @media screen and (max-width: 1092px) {
      grid-template-columns: 1fr;
      max-width: 660px;
    }
    @media screen and (max-width: 400px) {
      margin-bottom: 84px;
    }
    &_head {
    }
    &_column {
    }
    &_row {
    }
    &_total {
    }
  }
  &__order {
  }
}
</style>
