<template>
  <div class="cart">
    <h2 class="cart__title">корзина</h2>
    <div class="cart__table table">
      <div class="table__head">
        <div class="table__head_label">Товар</div>
        <div class="table__head_label">Наименование</div>
        <div class="table__head_label">Стоимость</div>
        <div class="table__head_label">Удалить</div>
      </div>
      <div class="table__row">
        <div class="table__column"><img src="img/item-1.jpg" /></div>
        <div class="table__column">
          <div>Очень красивая картинка</div>
          <div>Дарья Воробьева</div>
          <div>2011</div>
        </div>
        <div class="table__column">
          <div>18000</div>
        </div>
        <div class="table__column">delete</div>
      </div>
      <div class="table__row">
        <div class="table__column"><img src="img/item-1.jpg" /></div>
        <div class="table__column">
          <div>Очень красивая картинка</div>
          <div>Дарья Воробьева</div>
          <div>2011</div>
        </div>
        <div class="table__column">
          <div>18000</div>
        </div>
        <div class="table__column">delete</div>
      </div>
      <div class="table__row">
        <div class="table__column"><img src="img/item-1.jpg" /></div>
        <div class="table__column">
          <div>Очень красивая картинка</div>
          <div>Дарья Воробьева</div>
          <div>2011</div>
        </div>
        <div class="table__column">
          <div>18000</div>
        </div>
        <div class="table__column">delete</div>
      </div>
      <div class="table__total">total</div>
    </div>
    <div class="cart__order">ОФОРМИТЬ ЗАКАЗ</div>
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
  flex-grow: 1;
  flex-direction: column;
  align-items: flex-start;
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
    width: 100%;
  }
  &__order {
    background-color: aquamarin;
  }
}
.table {
  display: grid;
  @media screen and (max-width: 1092px) {
    grid-template-columns: 1fr;
    max-width: 660px;
  }
  @media screen and (max-width: 400px) {
    margin-bottom: 84px;
  }
  &__head {
    padding: 9px 0;
    display: grid;
    grid-template-columns: 160px 1fr 160px 160px;
    column-gap: 40px;
    align-items: center;
    border-top: 1px solid var(--third-black);
    border-bottom: 1px solid var(--third-black);
    &_label {
      align-items: center;
      color: var(--semi-black);
      font-size: 16px;
      font-weight: 500;
      &:nth-last-of-type(2),
      &:last-of-type {
        text-align: center;
      }
    }
    @media screen and (max-width: 1092px) {
      display: none;
    }
  }
  &__row {
    display: grid;
    grid-template-columns: 160px 1fr 160px 160px;
    column-gap: 40px;
    border-bottom: 1px solid var(--third-black);
    align-items: center;
    padding: 20px 0;
    @media screen and (max-width: 1092px) {
      display: block;
    }
  }
  &__column {
    position: relative;
    &:nth-last-of-type(2),
    &:last-of-type {
      text-align: center;
    }
    img {
      width: 100%;
      @media screen and (max-width: 1092px) {
        max-width: 200px;
        object-fit: cover;
      }
    }
  }
  &__total {
    padding: 5px 16px;
    display: grid;
    grid-template-columns: 160px 1fr 1fr 160px;
    column-gap: 10px;
    align-items: center;
    border-bottom: 2px solid #eeeff4;
    background: #fff;
    &_label {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: #999;
      cursor: pointer;
    }
  }
}
</style>
