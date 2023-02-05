<template>
  <div class="shop">
    <h1 class="shop__title">Наивное искусство</h1>
    <div class="shop__description">
      Современные технологии достигли такого уровня, что глубокий уровень
      погружения представляет собой интересный эксперимент проверки новых
      принципов формирования материально-технической и кадровой базы.
    </div>
    <div class="shop__filter">
      <div class="shop__filter_item">
        <span>Год</span>
        <img src="/svg/filter-arrows-norm.svg" alt="menu-icon" />
      </div>
      <div class="shop__filter_item">
        <span>Цена</span>
        <img src="/svg/filter-arrows-norm.svg" alt="menu-icon" />
      </div>
    </div>
    <Loader v-if="loading" />
    <Gallery :artworks="allArtworks" v-else />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import api from "@/api";
import Gallery from "@/components/Gallery.vue";
import Loader from "@/components/ui/Loader.vue";

const allArtworks = ref([]);
const loading = ref(true);

onMounted(async () => {
  allArtworks.value = await api.getAllArtworks();
  loading.value = false;
});
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
}
</style>
