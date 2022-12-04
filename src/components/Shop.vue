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
        v-for="artwork of artworks"
        :key="artwork.id"
        :artist_id="artwork.artist.id"
        :artist_name="artwork.artist.name"
        :year="artwork.created"
        :description="artwork.description"
        :technique="artwork.technique"
        :size="artwork.size"
        :on_sale="artwork.for_sale"
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
  <ul>
    <li v-for="country in countries" :key="country.id">
      {{ country.name }} : {{ country.capital }}
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue";
//import { onMounted } from "vue"; хук для после загрузки страницы
//import api from "@/api.js"; запрос

import { computed } from "vue";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

const artworks = ref([
  {
    id: 1,
    image: "/img/item-1.jpg",
    title: "Бородатые лица зверей",
    artist: {
      id: 1,
      name: "Виктор Тимофеев",
    },
    created: 2000,
    for_sale: true,
    price: 10000,
    description: "описание",
    technique: "техника",
    size: "размеры",
    path: "/:id",
  },
  {
    id: 2,
    image: "/img/item-2.jpg",
    title: "Котенок",
    artist: {
      id: 3,
      name: "Татьяна Еленок",
    },
    created: 1973,
    for_sale: false,
    price: "",
    description: "описание",
    technique: "техника",
    size: "размеры",
    path: "/:id",
  },
  {
    id: 3,
    image: "/img/item-3.jpg",
    title: "Преображение",
    artist: {
      id: 1,
      name: "Виктор Тимофеев",
    },
    created: 2011,
    for_sale: true,
    price: 18000,
    description:
      "Современные технологии достигли такого уровня, что глубокий уровень погружения представляет собой интересный эксперимент проверки новых принципов формирования материально-технической и кадровой базы.",
    technique: "ДВП, масло",
    size: "700×500 мм",
    path: "/:id",
  },
  {
    id: 4,
    image: "/img/item-4.jpg",
    title: "Название",
    artist: {
      id: 1,
      name: "Виктор Тимофеев",
    },
    created: 2002,
    for_sale: true,
    price: 10002,
    description: "описание",
    technique: "техника",
    size: "размеры",
    path: "/:id",
  },
  {
    id: 5,
    image: "/img/item-5.jpg",
    title: "Название",
    artist: {
      id: 2,
      name: "Альфрид Шаймарданов",
    },
    created: 2003,
    for_sale: true,
    price: 10003,
    description: "описание",
    technique: "техника",
    size: "размеры",
    path: "/:id",
  },
  {
    id: 6,
    image: "/img/item-6.jpg",
    title: "Название",
    artist: {
      id: 2,
      name: "Альфрид Шаймарданов",
    },
    created: 2004,
    for_sale: true,
    price: 10004,
    description: "описание",
    technique: "техника",
    size: "размеры",
    path: "/:id",
  },
  {
    id: 7,
    image: "/img/item-7.jpg",
    title: "Река жизни",
    artist: {
      id: 2,
      name: "Альфрид Шаймарданов",
    },
    created: 2013,
    for_sale: true,
    price: 10005,
    description: "описание",
    technique: "холст, масло",
    size: "130х100 см",
    path: "/:id",
  },
]);

//const allArtworksQuery = gql`
//  query {
//    artworks {
//        id
//        image
//        title
//        created
//        for_sale
//        price
//        artist {
//          id
//          name
//        }
//      }
//    }
//`;

const allCountriesQuery = gql`
  query getAllCountries {
    countries {
      name
      capital
    }
  }
`;

const countryByCode = gql`
  query {
    country(code: "BR") {
      name
      capital
    }
  }
`;

const { result } = useQuery(allCountriesQuery);
const countries = computed(() => result.value?.countries ?? []);
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
