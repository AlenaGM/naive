<template>
  <div class="cart">
    <h2 class="cart__title">корзина</h2>
    <table class="cart__table table">
      <thead>
        <tr class="table__row">
          <th>Товар</th>
          <th>Наименование</th>
          <th>Стоимость</th>
          <th>Удалить</th>
        </tr>
      </thead>
      <tbody>
        <tr class="table__row">
          <td><img src="img/item-1.jpg" /></td>
          <td>
            <span>Очень красивая картинка</span>
            <div>Дарья Воробьева</div>
            <div>2011</div>
          </td>
          <td><span>18 000 R</span></td>
          <td>
            Удалить
            <img src="svg/trash.svg" alt="delete icon" />
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr class="table__row">
          <th class="table__total">Итого:</th>
          <th class="table__sum"><span>18 000 R</span></th>
        </tr>
      </tfoot>
    </table>
    <div class="cart__order">ОФОРМИТЬ ЗАКАЗ</div>
  </div>
</template>

<script setup>
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
    margin-bottom: 53px;
  }
  &__order {
    background-color: yellow;
  }
}
.table {
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  font-weight: 500;
  color: var(--black);
  span {
    color: inherit;
    font-size: 18px;
    font-weight: 600;
  }
  &__row {
    display: flex;
    column-gap: 40px;
    padding: 20px 0;
    border-bottom: 1px solid var(--third-black);
    align-items: center;
  }
  thead,
  tfoot {
    color: var(--semi-black);
  }
  thead {
    border-top: 1px solid var(--third-black);
    tr {
      padding: 8px 0;
    }
  }
  td,
  th {
    font-weight: 500;
    &:first-of-type {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      width: 160px;
      img {
        width: 100%;
      }
    }
    &:nth-of-type(2) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      min-width: 250px;
      flex-grow: 1;
      span {
        flex-wrap: wrap;
      }
      div:nth-of-type(2) {
        font-size: 14px;
      }
    }
    &:nth-of-type(3) {
      display: flex;
      justify-content: flex-start;
      width: 120px;
    }
    &:last-of-type {
      width: 140px;
      display: flex;
      justify-content: flex-start;
      flex-direction: row;
      img {
        width: 20px;
        margin-left: 8px;
      }
    }
  }
  tfoot {
    span {
      color: var(--black);
      font-size: 18px;
      font-weight: 600;
    }
    .table__total {
      display: flex;
      min-width: 410px;
      flex-grow: 1;
      justify-content: flex-end;
    }
    .table__sum {
      display: flex;
      max-width: 300px;
      justify-content: flex-start;
    }
  }
}
</style>
