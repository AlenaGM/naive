<template>
  <div class="artist">
    <h2 class="artist__title">художник</h2>
    <div class="artist__card">
      <div class="artist__image">
        <img :src="artist.image" :alt="artist.lastName" />
      </div>
      <div>
        <h3 class="artist__name">
          {{ artist.firstName }} {{ artist.lastName }}
        </h3>
        <div class="artist__description">
          {{ artist.bio }}
        </div>
      </div>
    </div>
    <div class="artist__paintings">
      <h4 class="artist__paintings_title">Работы художника</h4>
      <div class="artist__paintings_container">
        <router-link
          class="artist__paintings_item"
          v-for="artwork in artist.artworks"
          :to="`/naive/artworks/${artwork.artworkId}`"
          :key="artwork.artworkId"
        >
          <img
            :src="artwork.image"
            :alt="artwork.title"
            class="artist__paintings_thumbnail"
          />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  artist: {
    type: Object,
    default: () => {},
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.artist {
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
      margin: 17px 0 17px 0;
    }
  }
  &__card {
    display: grid;
    align-items: start;
    grid-template-columns: minmax(auto, 480px) minmax(580px, 1fr);
    column-gap: 40px;
    margin-bottom: 83px;
    @media screen and (max-width: 1092px) {
      grid-template-columns: 1fr;
      max-width: 660px;
      justify-items: center;
    }
    @media screen and (max-width: 400px) {
      margin-bottom: 28px;
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
      font-size: 24px;
      margin-top: 24px;
      text-align: center;
    }
  }
  &__description {
    margin-top: 0.75rem;
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 130%;
  }
  &__paintings {
    width: 100%;
    &_title {
      margin: 0 0 10px 0;
      @media screen and (max-width: 400px) {
        margin: 0;
      }
    }
    &_container {
      display: inline-flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      margin-bottom: 124px;
      @media screen and (max-width: 400px) {
        margin-bottom: 42px;
      }
    }
    &_item {
      height: 107px;
      margin: 20px 20px 0 0;
      img {
        height: 100%;
        object-fit: cover;
      }
      @media screen and (max-width: 400px) {
        margin: 12px 12px 0 0;
      }
    }
    @media screen and (max-width: 1092px) {
      max-width: 660px;
    }
  }
}
</style>
