<template>
  <div class="shop__gallery">
    <router-link
      class="shop__gallery_item"
      v-for="artwork in artworks"
      :to="`/naive/artworks/${artwork.artworkId}`"
      :key="artwork.artworkId"
      :created="artwork.created"
      :price="artwork.price"
      :available="artwork.available"
    >
      <img
        :src="artwork.image"
        :alt="artwork.title"
        class="shop__gallery_image"
      />
      <div class="shop__gallery_info">
        <span>{{ artwork.title }}</span>
        <div>
          <img src="/svg/artist-white.svg" alt="artist-icon" />
          {{ artwork.artistName }}
        </div>
        <div>{{ artwork.created }} г.</div>
        <div v-if="artwork.price">
          <img src="/svg/price-white.svg" alt="price-icon" />
          <span>
            {{
              new Intl.NumberFormat("ru-RU", {
                style: "currency",
                currency: "RUB",
                minimumFractionDigits: 0,
              }).format(artwork.price)
            }}
          </span>
        </div>
        <div v-else>Нет в продаже</div>
      </div>
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
      align-items: center;
      margin-left: 14px;
      cursor: pointer;
      img {
        margin-right: 7px;
        max-height: 18px;
      }
    }
  }
  &__gallery {
    columns: 3 360px;
    column-gap: 40px;
    margin: 80px auto 250px auto;
    @media screen and (max-width: 1207px) {
      margin: 50px auto 120px auto;
    }
    @media screen and (max-width: 1024px) {
      columns: 2 350px;
      column-gap: 20px;
    }
    a {
      width: 360px;
      margin: 0 0 50px 0;
      display: inline-block;
      position: relative;
      width: 100%;
      @media screen and (max-width: 1024px) {
        width: 350px;
        margin: 0 0 12px 0;
        display: inline-block;
        width: 100%;
      }
    }
    &_image {
      width: 100%;
    }
    &_info {
      background-color: var(--black);
      opacity: 0%;
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      top: 20px;
      left: 20px;
      bottom: 20px;
      right: 20px;
      transition: all 0.5s ease-out;
      padding: 20px;
      outline: 1px solid #ffffff50;
      outline-offset: -20px;
      font-size: 16px;
      color: var(--white);
      &:hover {
        opacity: 80%;
      }
      img {
        margin-right: 5px;
        width: 12px;
      }
      span {
        color: inherit;
        font-size: 18px;
        font-weight: 600;
      }
      div:nth-of-type(2) {
        font-size: 14px;
        margin-bottom: 20px;
      }
    }
  }
}
</style>
