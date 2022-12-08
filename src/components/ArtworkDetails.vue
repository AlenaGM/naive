<template>
  <div class="artwork">
    <h2 class="artwork__title">произведение</h2>
    <div class="artwork__card">
      <div class="artwork__image">
        <img src="/img/item-3-fullsize.jpg" alt="Преображение" />
      </div>
      <div>
        <h3 class="artwork__name">Преображение</h3>
        <div class="artwork__artist">
          <router-link to="/naive/artist/1" class="artwork__artist_link">
            <img src="/svg/artist.svg" alt="artist-icon" />
            <h4>Виктор Тимофеев</h4>
            <span class="artwork__price">2011</span>
          </router-link>
        </div>
        <div class="artwork__block artwork__description">
          Современные технологии достигли такого уровня, что глубокий уровень
          погружения представляет собой интересный эксперимент проверки новых
          принципов формирования материально-технической и кадровой базы.
        </div>
        <div class="artwork__block artwork__params">
          <div class="artwork__params_item">
            <span>Техника:</span>
            <div>ДВП, масло</div>
          </div>
          <div class="artwork__params_item">
            <span>Размер:</span>
            <div>700×500 мм</div>
          </div>
          <div class="artwork__params_item">
            <span>Цена:</span>
            <div class="artwork__price">
              <img src="/svg/price.svg" alt="price-icon" />
              18.000 ₽
            </div>
          </div>
          <div class="artwork__params_item">
            <ui-button>в корзину</ui-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import uiButton from "@/components/ui/Button.vue";

//const props = defineProps({
//  id: {
//    type: String,
//    required: true,
//  },
//  image: {
//    type: String,
//    required: true,
//  },
//  title: {
//    type: String,
//    required: true,
//  },
//  price: {
//    type: Number,
//    required: true,
//  },
//  artist_id: {
//    type: String,
//    required: true,
//  },
//  artist_name: {
//    type: String,
//    required: true,
//  },
//  year: {
//    type: Number,
//    required: true,
//  },
//  description: {
//    type: String,
//    required: true,
//  },
//  technique: {
//    type: String,
//    required: true,
//  },
//  size: {
//    type: String,
//    required: true,
//  },
//  on_sale: {
//    type: Boolean,
//    default: true,
//  },
//});
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
    align-items: center;
    grid-template-columns: 1fr 360px;
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
      max-width: 100%;
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
      font-size: 1.5rem;
      margin-top: 24px;
    }
  }
  &__artist {
    &_link {
      display: inline-flex;
      align-items: baseline;
      text-decoration: none;
      color: var(--black);
      img {
        display: block;
        margin-right: 7px;
      }
      h4 {
        margin: 0 10px 0 0;
        font-size: 1.5rem;
        font-weight: 600;
        line-height: 29px;
        @media screen and (max-width: 400px) {
          font-size: 1.125rem;
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
