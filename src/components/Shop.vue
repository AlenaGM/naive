<template>
  <div class="shop">
    <h1 class="shop__title">Наивное искусство</h1>
    <div class="shop__description">
      Современные технологии достигли такого уровня, что глубокий уровень
      погружения представляет собой интересный эксперимент проверки новых
      принципов формирования материально-технической и кадровой базы.
    </div>
    <div class="shop__filter">
      <img src="/svg/filter.svg" alt="menu-icon" />
      <div class="shop__filter_item">
        <span>Год</span>
        <img src="/svg/filter-arrows-norm.svg" alt="menu-icon" />
      </div>
      <div class="shop__filter_item">
        <span>Цена</span>
        <img src="/svg/filter-arrows-norm.svg" alt="menu-icon" />
      </div>
    </div>
    <div class="shop__gallery">
      <router-link
        class="shop__gallery_item"
        :to="element.path"
        v-for="(element, i) of gallery"
        :key="i"
      >
        <img :src="element.image" alt="menu-icon" class="shop__gallery_image" />
        <div class="shop__gallery_item-hover"></div>
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
    path: "/:id",
  },
  {
    id: 2,
    image: "/img/item-2.jpg",
    path: "/:id",
  },
  {
    id: 3,
    image: "/img/item-3.jpg",
    path: "/:id",
  },
  {
    id: 4,
    image: "/img/item-4.jpg",
    path: "/:id",
  },
  {
    id: 5,
    image: "/img/item-5.jpg",
    path: "/:id",
  },
  {
    id: 6,
    image: "/img/item-6.jpg",
    path: "/:id",
  },
  {
    id: 7,
    image: "/img/item-7.jpg",
    path: "/:id",
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
    margin: 50px 0 15px 0;
    display: inline-flex;
    align-self: flex-end;
    &_item {
      display: inline-flex;
      margin-left: 14px;
      cursor: pointer;
      img {
        margin-left: 7px;
      }
    }
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
