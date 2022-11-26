<template>
  <div class="shop">
    <h1 class="shop__title">Наивное искусство</h1>
    <div class="shop__description">
      Современные технологии достигли такого уровня, что глубокий уровень
      погружения представляет собой интересный эксперимент проверки новых
      принципов формирования материально-технической и кадровой базы.
    </div>
    <div class="shop__filter">filter</div>
    <div class="shop__gallery">
      <router-link
        class="shop__gallery_item"
        :to="element.path"
        v-for="(element, i) of gallery"
        :key="i"
      >
        <img :src="element.image" alt="menu-icon" class="shop__gallery_image" />
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const gallery = [
  {
    id: 1,
    image: "/img/item-1.jpg",
    path: "/",
  },
  {
    id: 2,
    image: "/img/item-2.jpg",
    path: "/",
  },
  {
    id: 3,
    image: "/img/item-3.jpg",
    path: "/",
  },
  {
    id: 4,
    image: "/img/item-4.jpg",
    path: "/",
  },
  {
    id: 5,
    image: "/img/item-5.jpg",
    path: "/",
  },
  {
    id: 6,
    image: "/img/item-6.jpg",
    path: "/",
  },
  {
    id: 7,
    image: "/img/item-7.jpg",
    path: "/",
  },
];
</script>

<style lang="scss" scoped>
.shop {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__title {
    margin: 30px 0 0 0;
    text-align: center;
    font-size: 76px;
    font-weight: 600;
    line-height: 68px;
    letter-spacing: -0.025em;
    @media screen and (max-width: 767px) {
      font-size: 64px;
    }
    @media screen and (max-width: 400px) {
      font-size: 48px;
    }
  }
  &__description {
    margin: 20px 0 0 0;
    max-width: 774px;
    font-size: 24px;
    font-weight: 400;
    line-height: 31px;
    text-align: center;
    @media screen and (max-width: 767px) {
      font-size: 18px;
    }
  }
  &__filter {
    margin: 45px 0 0 0;
    text-align: right;
  }
  &__gallery {
    columns: 3 360px;
    column-gap: 40px;
    margin: 0 auto 250px auto;
    @media screen and (max-width: 1207px) {
      margin: 0 auto 120px auto;
    }
    a {
      width: 360px;
      margin: 0 0 50px 0;
      display: inline-block;
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
}
</style>
