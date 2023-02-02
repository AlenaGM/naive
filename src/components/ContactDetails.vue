<template>
  <div class="contact">
    <h2 class="contact__title">контакты - тест</h2>
    <div class="contact__card"></div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import api from "@/api";

onMounted(() => {
  api.getAllArtists();
});
</script>

<style lang="scss" scoped>
.contact {
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
    grid-template-columns: 1fr 580px;
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
