<template>
  <div class="delivery">
    <h2 class="delivery__title">заказ и доставка</h2>
    <div class="delivery__card"></div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.delivery {
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
      margin: 30px 0 17px 0;
    }
  }
  &__card {
    display: grid;
    align-items: start;
    grid-template-columns: minmax(auto, 540px) minmax(580px, 1fr);
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
}
</style>
