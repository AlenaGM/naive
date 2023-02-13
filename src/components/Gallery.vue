<template>
  <div class="shop__filter">
    <div class="shop__filter_item">
      <img src="/svg/filter.svg" alt="filter-icon" />
      <span>Показать доступные работы</span>
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
      <div class="shop__gallery_info">
        <div class="shop__gallery_info-container">
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
      top: 20px;
      left: 20px;
      bottom: 20px;
      right: 20px;
      transition: all 0.5s ease-out;
      padding: 20px;
      &:hover {
        opacity: 80%;
      }
      &-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;
        border: 1px solid var(--white);
        width: 100%;
        height: 100%;
        font-size: 16px;
        color: var(--white);
        img {
          margin-right: 6px;
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
}
</style>
