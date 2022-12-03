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
        :to="artwork.path"
        v-for="artwork of gallery"
        :key="artwork.id"
        :artist_id="artwork.artist_id"
        :artist_name="artwork.artist_name"
        :year="artwork.year"
        :description="artwork.description"
        :technique="artwork.technique"
        :size="artwork.size"
        :on_sale="artwork.on_sale"
        :price="artwork.price"
      >
        <img
          :src="artwork.image"
          :alt="artwork.title"
          class="shop__gallery_image"
        />
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const gallery = ref([
  {
    id: 1,
    image: "/img/item-1.jpg",
    artist_id: 1,
    artist_name: "Виктор Тимофеев",
    title: "Бородатые лица зверей",
    year: 2000,
    description: "описание",
    technique: "техника",
    size: "размеры",
    on_sale: true,
    price: 10000,
    path: "/:id",
  },
  {
    id: 2,
    image: "/img/item-2.jpg",
    artist_id: 3,
    artist_name: "Татьяна Еленок",
    title: "Котенок",
    year: 1973,
    description: "описание",
    technique: "техника",
    size: "размеры",
    on_sale: false,
    price: "",
    path: "/:id",
  },
  {
    id: 3,
    image: "/img/item-3.jpg",
    artist_id: 1,
    artist_name: "Виктор Тимофеев",
    title: "Преображение",
    year: 2011,
    description:
      "Современные технологии достигли такого уровня, что глубокий уровень погружения представляет собой интересный эксперимент проверки новых принципов формирования материально-технической и кадровой базы.",
    technique: "ДВП, масло",
    size: "700×500 мм",
    on_sale: true,
    price: 18000,
    path: "/:id",
  },
  {
    id: 4,
    image: "/img/item-4.jpg",
    artist_id: 1,
    artist_name: "Виктор Тимофеев",
    title: "Название",
    year: 2002,
    description: "описание",
    technique: "техника",
    size: "размеры",
    on_sale: true,
    price: 10002,
    path: "/:id",
  },
  {
    id: 5,
    image: "/img/item-5.jpg",
    artist_id: 2,
    artist_name: "Альфрид Шаймарданов",
    title: "Название",
    year: 2003,
    description: "описание",
    technique: "техника",
    size: "размеры",
    on_sale: true,
    price: 10003,
    path: "/:id",
  },
  {
    id: 6,
    image: "/img/item-6.jpg",
    artist_id: 2,
    artist_name: "Альфрид Шаймарданов",
    title: "Название",
    year: 2004,
    description: "описание",
    technique: "техника",
    size: "размеры",
    on_sale: true,
    price: 10004,
    path: "/:id",
  },
  {
    id: 7,
    image: "/img/item-7.jpg",
    artist_id: 2,
    artist_name: "Альфрид Шаймарданов",
    title: "Река жизни",
    year: 2013,
    description: "описание",
    technique: "холст, масло",
    size: "130х100 см",
    on_sale: true,
    price: 10005,
    path: "/:id",
  },
]);
</script>

<style lang="scss" scoped>
.shop {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__title {
    margin: 30px 0 0 0;
    font-size: 4.75rem;
    font-weight: 600;
    line-height: 90%;
    letter-spacing: -0.025em;
    text-align: center;
    @media screen and (max-width: 803px) {
      font-size: 3.75rem;
    }
    @media screen and (max-width: 470px) {
      font-size: 3rem;
    }
  }
  &__description {
    margin: 20px 0 0 0;
    max-width: 774px;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 130%;
    text-align: center;
    @media screen and (max-width: 803px) {
      font-size: 1.125rem;
    }
    @media screen and (max-width: 470px) {
      font-size: 1rem;
    }
  }
  &__filter {
    margin: 50px 0 15px 0;
    display: inline-flex;
    align-self: flex-end;
    font-size: 1rem;
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
    @media screen and (max-width: 1024px) {
      columns: 2 350px;
      column-gap: 20px;
    }
    a {
      width: 360px;
      margin: 0 0 50px 0;
      display: inline-block;
      width: 100%;
      img {
        width: 100%;
      }
      @media screen and (max-width: 1024px) {
        width: 350px;
        margin: 0 0 12px 0;
        display: inline-block;
        width: 100%;
      }
    }
  }
}
</style>
