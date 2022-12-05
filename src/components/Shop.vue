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
  {{ result }}
  <ul v-for="artwork in artworkss" :key="artwork.id">
    <li>
      <p>{{ artwork.title }}</p>
      <img :src="artwork.imageUrl" :alt="artwork.title" />
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
      firstName: "Виктор",
      lastName: "Тимофеев",
    },
    created: 2015,
    description:
      "По дороге в мастерскую я подбираю какую-нибудь фанерку или дощечку. Ничего не выпиливаю, не равняю края. Оставляю всё как есть. Проще простого, пойти и купить лист ДВП, но мне интереснее найти обрезок на помойке. У него ведь уже есть какая-то своя судьба, а я ему продлеваю жизнь! Беру краску, которая окажется под рукой, и просто крашу. Двигаю рукой — вверх-вниз, туда-сюда… Медитирую. Думаю, что в это время моей рукой водит Бог. Во как! Надо доверять себе. Не мешать. Не бороться с самим собой. Уважительно относиться. Рисовать я не умел и до сих пор не умею, в этом пора признаться. Но творить люблю. Прямо сам балдею! Как-то, когда я работал подмастерьем у Баки Урманче, он подозвал меня и говорит: «Вот, будем, Витя, с тобой картину писать». Я ему честно сказал, что не умею. А он: «Я тебя научу, не переживай. И не таких…» Но главный урок мастера: не бояться прежде всего самого себя!",
    technique: "техника",
    size: "ДВП, масло",
    onSale: true,
    price: 18000,
    path: "/:id",
  },
  {
    id: 2,
    image: "/img/item-2.jpg",
    title: "Котенок",
    artist: {
      id: 2,
      firstName: "Татьяна",
      lastName: "Еленок",
    },
    created: 1973,
    description:
      "Картины Еленок красочны, но цвет для нее – это раскраска предметов и плоскостей, в результате в работах больше пестроты, чем цветового единства. Художнице, несомненно, присуще чувство юмора и изобретательность в умении комбинировать мотивы, почерпнутые из самых разных источников. Ее всегда отличала любознательность, желание, как можно больше увидеть, во всем принять участие. Ее картины демонстрировались на десятках выставок, часто вместе с произведениями профессиональных художников",
    technique: "картон, гуашь",
    size: "60×44,5",
    onSale: false,
    price: "",
    path: "/:id",
  },
  {
    id: 3,
    image: "/img/item-3.jpg",
    title: "Преображение",
    artist: {
      id: 1,
      firstName: "Виктор",
      lastName: "Тимофеев",
    },
    created: 2011,
    description:
      "— Главное в живописи  — быть интересным. Само умение рисовать не делает человека художником, потому как умение рисовать (писать) — это понятие относительное, а умение чувствовать — вполне конкретное. Работа художника — это глас вопиющего в пустыне. Хорошо, чтобы его услышали. Кому-то везет больше, раздается  эхо. Его «А-аааа!» разносится по всему миру.",
    technique: "ДВП, масло",
    size: "70×50",
    onSale: true,
    price: 18000,
    path: "/:id",
  },
  {
    id: 4,
    image: "/img/item-4.jpg",
    title: "Пора тополиного пуха",
    artist: {
      id: 1,
      firstName: "Виктор",
      lastName: "Тимофеев",
    },
    created: 2010,
    description:
      "Интуитивно подбирая краски, работая в условиях испепеляющей жары 2010 года он передал настроение того лета, воплотил на ДВП масляными красками атмосферу не выносимой жары.",
    technique: "ДВП, масло",
    size: "60×50",
    onSale: true,
    price: 24000,
    path: "/:id",
  },
  {
    id: 5,
    image: "/img/item-5.jpg",
    title: "На пруду",
    artist: {
      id: 3,
      firstName: "Михаил",
      lastName: "Ржанников",
    },
    created: 1992,
    description: "описание",
    technique: "техника",
    size: "размеры",
    onSale: true,
    price: 10003,
    path: "/:id",
  },
  {
    id: 6,
    image: "/img/item-6.jpg",
    title: "Кот",
    artist: {
      id: 4,
      firstName: "Иван",
      lastName: "Генералич",
    },
    created: "1978",
    description: "",
    technique: "стекло, масло",
    size: "41 x 54",
    onSale: false,
    price: "",
    path: "/:id",
  },
  {
    id: 7,
    image: "/img/item-7.jpg",
    title: "Река жизни",
    artist: {
      id: 5,
      firstName: "Альфрид",
      lastName: "Шаймарданов",
    },
    created: 2013,
    description: "описание",
    technique: "холст, масло",
    size: "130х100 см",
    onSale: true,
    price: 10005,
    path: "/:id",
  },
]);

const allArtworksQuery = gql`
  query {
    allArtworks {
      id
      title
      imageUrl
    }
  }
`;

const { result } = useQuery(allArtworksQuery);
console.log(result);
const artworkss = computed(() => result.value?.allArtworks ?? []);
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
