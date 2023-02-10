<template>
  <div class="cart">
    <h2 class="cart__title">корзина</h2>
    <table class="cart__table table" v-if="cartStore.cart.length">
      <thead>
        <tr>
          <th>Товар</th>
          <th>Наименование</th>
          <th>Стоимость</th>
          <th>Удалить</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item of cartStore.cart" :key="item.artworkId">
          <td>
            <router-link :to="`/naive/artworks/${item.artworkId}`">
              <img :src="item.image" :alt="item.title" />
            </router-link>
          </td>
          <td>
            <router-link :to="`/naive/artworks/${item.artworkId}`">
              <span>{{ item.title }}</span>
            </router-link>
            <router-link :to="`/naive/artists/${item.artistId}`">
              <div>{{ item.artistName }}</div>
            </router-link>
            <div>{{ item.created }} г.</div>
          </td>
          <td>
            <span>
              {{
                new Intl.NumberFormat("ru-RU", {
                  style: "currency",
                  currency: "RUB",
                  minimumFractionDigits: 0,
                }).format(item.price)
              }}
            </span>
          </td>
          <td @click="cartStore.deleteFromCart(i)">
            Удалить
            <img src="svg/trash.svg" alt="delete icon" />
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th class="table__total">Итого:</th>
          <th class="table__sum">
            <span>
              {{
                new Intl.NumberFormat("ru-RU", {
                  style: "currency",
                  currency: "RUB",
                  minimumFractionDigits: 0,
                }).format(cartTotal)
              }}
            </span>
          </th>
        </tr>
      </tfoot>
    </table>
    <div class="cart__emptyMessage" v-else>Корзина пуста</div>
    <ui-button
      class="cart__order"
      :mobileFullWidth="true"
      v-if="cartStore.cart.length"
    >
      оформить заказ
    </ui-button>
    <ui-button
      class="cart__order"
      type="link"
      to="/naive/"
      :mobileFullWidth="true"
      v-else
    >
      в магазин
    </ui-button>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useCartStore } from "@/store/cart.js";
import uiButton from "@/components/ui/Button.vue";

const cartStore = useCartStore();

const cartTotal = computed(() => {
  let result = 0;
  for (let item of cartStore.cart) {
    result += item.price;
  }
  return result;
});
</script>

<style lang="scss" scoped>
.cart {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (max-width: 560px) {
    align-items: center;
  }
  &__title {
    font-size: 2rem;
    font-weight: 600;
    line-height: 90%;
    text-transform: uppercase;
    margin: 60px 0 34px 0;
    @media screen and (max-width: 560px) {
      font-size: 1.5rem;
      margin: 30px 0 17px 0;
    }
  }
  &__emptyMessage {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
    font-size: 1.25rem;
    margin: 0 auto;
  }
  &__table {
    width: 100%;
  }
  &__order {
    margin: 50px auto 100px auto;
    @media screen and (max-width: 560px) {
      margin: 50px auto 50px auto;
    }
  }
}
.table {
  font-size: 1rem;
  font-weight: 500;
  color: var(--black);
  span {
    color: inherit;
    font-size: 18px;
    font-weight: 600;
  }
  tr {
    display: grid;
    grid-template: 1fr/ 160px minmax(250px, 1fr) 120px 140px;
    column-gap: 40px;
    padding: 20px 0;
    border-bottom: 1px solid var(--third-black);
    align-items: center;
    justify-items: start;
  }
  td {
    &:first-of-type {
      img {
        width: 100%;
        max-width: 160px;
        cursor: pointer;
      }
    }
    &:nth-of-type(2) {
      span:hover {
        cursor: pointer;
        text-decoration: underline 2px;
      }
      a:nth-of-type(2):hover {
        cursor: pointer;
        text-decoration: underline 2px;
      }
      div:nth-of-type(2) {
        font-size: 14px;
      }
    }
    &:nth-of-type(3) {
      display: inline-flex;
      justify-self: center;
    }
    &:last-of-type {
      display: inline-flex;
      justify-self: center;
      cursor: pointer;
      img {
        width: 20px;
        margin-left: 8px;
      }
      &:hover {
        text-decoration: underline 2px;
      }
    }
  }
  th {
    &:nth-of-type(3) {
      display: inline-flex;
      justify-self: center;
    }
    &:last-of-type {
      display: inline-flex;
      justify-self: center;
    }
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
  tfoot {
    span {
      color: var(--black);
      font-size: 18px;
      font-weight: 600;
    }
    tr {
      grid-template-columns: 160px minmax(250px, 1fr) 120px 140px;
      grid-template-areas: ". total-label total-sum .";
      th {
        &:first-of-type {
          grid-area: total-label;
          display: inline-flex;
          justify-self: flex-end;
        }
        &:last-of-type {
          grid-area: total-sum;
        }
      }
    }
  }

  @media screen and (max-width: 850px) {
    thead {
      display: none;
    }
    tbody {
      tr {
        grid-template-columns: 160px minmax(120px, 1fr) minmax(140px, 1fr);
        grid-template-areas:
          "item-img item-info item-info"
          "item-img item-price item-del";
        gap: 20px;
        &:first-of-type {
          border-top: 1px solid var(--third-black);
        }
      }
      td {
        &:first-of-type {
          grid-area: item-img;
        }
        &:nth-of-type(2) {
          grid-area: item-info;
        }
        &:nth-of-type(3) {
          grid-area: item-price;
          display: inline-flex;
          justify-self: flex-start;
        }
        &:last-of-type {
          grid-area: item-del;
          display: inline-flex;
          justify-self: flex-end;
        }
      }
    }
    tfoot {
      tr {
        grid-template-columns: 160px minmax(120px, 1fr) minmax(140px, 1fr);
        grid-template-areas: "total-label total-sum .";
        gap: 20px;
        th:last-of-type {
          display: inline-flex;
          justify-self: flex-start;
        }
      }
    }
  }

  @media screen and (max-width: 560px) {
    tbody {
      tr {
        grid-template-columns: 1fr 1fr;
        grid-template-areas:
          "item-img item-img"
          "item-info item-info"
          "item-price item-del";
      }
    }
    tfoot {
      tr {
        grid-template-columns: 1fr;
        grid-template-areas:
          "total-label"
          "total-sum";
        gap: 0px;
        th:first-of-type {
          justify-self: flex-start;
        }
      }
    }
  }
}
</style>
