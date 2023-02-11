<template>
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
  <div class="shop__gallery">
    <router-link
      class="shop__gallery_item"
      v-for="artwork in artworks"
      :to="`/naive/artworks/${artwork.artworkId}`"
      :key="artwork.artworkId"
      :created="artwork.created"
      :price="artwork.price"
    >
      <img
        :src="artwork.image"
        :alt="artwork.title"
        class="shop__gallery_image"
      />
    </router-link>
  </div>
</template>

<script setup>
const props = defineProps({
  artworks: {
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.shop {
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
