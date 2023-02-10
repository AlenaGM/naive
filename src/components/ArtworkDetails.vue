<template>
  <div class="artwork">
    <h2 class="artwork__title">произведение</h2>
    <div class="artwork__card">
      <div class="artwork__image">
        <img :src="artwork.image" :alt="artwork.title" />
      </div>
      <div>
        <h3 class="artwork__name">{{ artwork.title }}</h3>
        <div class="artwork__artist">
          <router-link
            :to="`/naive/artists/${artwork.artistId}`"
            class="artwork__artist_link"
          >
            <img src="/svg/menu-artist.svg" alt="artist-icon" />
            <h4>{{ artwork.artistName }}</h4>
            <span class="artwork__year">{{ artwork.created }} г.</span>
          </router-link>
        </div>
        <div class="artwork__block artwork__description">
          {{ artwork.description }}
        </div>
        <div class="artwork__block artwork__params">
          <div class="artwork__params_item">
            <span>Техника:</span>
            <div>{{ artwork.techniques }}</div>
          </div>
          <div class="artwork__params_item">
            <span>Размер:</span>
            <div>{{ artwork.dimensions }} см</div>
          </div>
          <div class="artwork__params_item">
            <span>Цена:</span>
            <div
              class="artwork__price"
              v-if="artwork.price && artwork.available"
            >
              <img src="/svg/price.svg" alt="price-icon" />
              {{
                new Intl.NumberFormat("ru-RU", {
                  style: "currency",
                  currency: "RUB",
                  minimumFractionDigits: 0,
                }).format(artwork.price)
              }}
            </div>
            <div v-else>нет в продаже</div>
          </div>
          <div
            class="artwork__params_item"
            v-if="artwork.price && artwork.available"
          >
            <ui-button
              @click="cartStore.addToCart(artwork)"
              :disabled="disabled"
              ><span v-if="disabled">в резерве</span
              ><span v-else>в корзину</span></ui-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import uiButton from "@/components/ui/Button.vue";
import { ref } from "vue";
import { useCartStore } from "@/store/cart.js";

const props = defineProps({
  artwork: {
    type: Object,
    default: () => {},
    required: true,
  },
});

const disabled = ref(false);
const cartStore = useCartStore();
</script>

<style lang="scss" scoped>
.artwork {
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
  &__card {
    display: grid;
    align-items: start;
    grid-template-columns: minmax(auto, 660px) minmax(360px, 1fr);
    column-gap: 40px;
    margin-bottom: 220px;
    @media screen and (max-width: 1092px) {
      grid-template-columns: 1fr;
      max-width: 660px;
    }
    @media screen and (max-width: 400px) {
      margin-bottom: 84px;
    }
  }
  &__image {
    display: block;
    img {
      width: 100%;
    }
  }
  &__name {
    font-size: 2rem;
    font-weight: 600;
    line-height: 39px;
    margin: 0 0 6px 0;
    @media screen and (max-width: 1092px) {
      margin-top: 48px;
    }
    @media screen and (max-width: 400px) {
      text-align: center;
      font-size: 1.5rem;
      margin-top: 24px;
    }
  }
  &__artist {
    &_link {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      text-decoration: none;
      color: var(--black);
      @media screen and (max-width: 400px) {
        justify-content: center;
      }
      img {
        display: block;
        margin-right: 7px;
      }
      h4 {
        margin: 0 10px 0 0;
        font-size: 1.5rem;
        font-weight: 600;
        line-height: 29px;
        margin-block-end: 0;
        @media screen and (max-width: 400px) {
          font-size: 1.125rem;
        }
        &:hover {
          text-decoration: underline 2px;
        }
      }
      span {
        font-size: 1.125rem;
        font-weight: 600;
        line-height: 22px;
        @media screen and (max-width: 400px) {
          font-size: 0.875rem;
        }
      }
    }
  }
  &__description {
    margin-top: 0.75rem;
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 130%;
  }
  &__params {
    margin-top: 58px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 30px;
    row-gap: 30px;
    align-items: end;
    justify-items: start;
    @media screen and (max-width: 400px) {
      display: block;
    }
    &_item {
      display: block;
      font-size: 1rem;
      font-weight: 400;
      line-height: 20px;
      span {
        font-weight: 600;
        margin-bottom: 5px;
      }
      @media screen and (max-width: 400px) {
        margin-top: 24px;
      }
    }
  }
  &__price {
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 29px;
    img {
      margin-right: 5px;
    }
    @media screen and (max-width: 400px) {
      font-size: 1.125rem;
    }
  }
}
</style>
