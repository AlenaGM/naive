<template>
  <div class="artists">
    <h2 class="artists__title">художники</h2>
    <Loader v-if="loading" />
    <div class="artists__gallery" v-else>
      <router-link
        class="artists__gallery_item"
        v-for="artist in allArtists"
        :to="`/naive/artists/${artist.id}`"
        :key="artist.id"
      >
        <div class="artists__gallery_image">
          <img :src="artist.image" :alt="artist.lastName" />
        </div>
        <div class="artists__gallery_info">
          <h3>
            <img src="/svg/menu-artist.svg" alt="artist-icon" />
            {{ artist.firstName }} {{ artist.lastName }}
          </h3>
          <div>{{ artist.bio.substr(0, 150) }}...<span> Подробнее</span></div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import api from "@/api";
import Loader from "@/components/ui/Loader.vue";

const allArtists = ref([]);
const loading = ref(true);

onMounted(async () => {
  allArtists.value = await api.getAllArtists();
  loading.value = false;
});
</script>

<style lang="scss" scoped>
.artists {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
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
  &__gallery {
    display: grid;
    align-items: start;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-auto-rows: 1fr;
    column-gap: 3rem;
    row-gap: 1.5rem;
    justify-items: center;
    margin-bottom: 83px;

    &_item {
      display: grid;
      grid-auto-flow: row;
      grid-template: auto 1fr/ 1fr;
      max-width: 254px;
      width: 100%;
      text-align: center;
    }

    &_image {
      position: relative;
      padding: 0px 0px 90% 0px;
      margin: 0px 0px 12px 0px;
      cursor: pointer;
      transition: all 0.4s ease;
      img {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        object-fit: cover;
        opacity: 0.9;
        &:hover {
          opacity: 1;
        }
      }
    }
    &_info {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      text-align: left;
      align-items: center;
      h3 {
        display: inline-flex;
        width: 100%;
        font-size: 1.25rem;
        font-weight: 600;
        line-height: 1.2;
        cursor: pointer;
        &:hover {
          text-decoration: underline 2px;
        }
      }
      span {
        font-weight: 600;
      }

      img {
        display: block;
        width: 20px;
        margin-right: 7px;
      }
    }
    @media screen and (max-width: 400px) {
      margin-bottom: 28px;
    }
  }
}
</style>
