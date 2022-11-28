<template>
  <header class="header">
    <div class="header__container container">
      <div class="header__menu">
        <div
          class="header__menu_mobile"
          @click="isOpenedMobileMenu = !isOpenedMobileMenu"
        >
          <img
            src="/svg/menu.svg"
            alt="menu"
            class="header__icon"
            v-if="!isOpenedMobileMenu"
          />
          <img
            src="/svg/menu-active.svg"
            alt="menu"
            class="header__icon"
            v-else
          />
        </div>
        <div class="header__menu_search">
          <img src="/svg/search.svg" alt="search" class="header__icon" />
        </div>
      </div>

      <div class="header__dropdown" v-if="isOpenedMobileMenu">
        <router-link
          class="header__dropdown_link"
          :to="element.path"
          v-for="(element, i) of menu"
          :key="i"
        >
          <img :src="element.image" alt="menu-icon" class="header__icon" />
          {{ element.name }}
        </router-link>
      </div>

      <div class="header__cart">
        <router-link to="/cart" class="header__cart_link">
          <span class="header__cart_count"> 1 </span>
          <img src="/svg/cart.svg" alt="cart" class="header__icon" />
          <span class="header__cart_title">корзина</span>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import menu from "@/components/layout/menu.js";
const isOpenedMobileMenu = ref(false);
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  height: 84px;
  background: var(--white);
  border-bottom: solid 1px rgba(41, 45, 50, 0.2);
  @media screen and (max-width: 767px) {
    height: auto;
  }
  &__container {
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: space-between;
    align-items: center;
    padding-top: 30px;
    padding-bottom: 30px;
  }
  &__menu {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    &_mobile {
      margin-right: 60px;
      cursor: pointer;
    }
    &_search {
      cursor: pointer;
    }
  }
  &__dropdown {
    position: fixed;
    background: var(--white);
    top: 72px;
    padding: 40px 70px 60px 30px;
    //border-radius: 8px;
    box-shadow: 8px 8px 30px 6px #00000033;
    display: flex;
    flex-direction: column;
    &_link {
      display: inline-flex;
      align-items: center;
      margin-bottom: 50px;
      color: var(--black);
      text-decoration: none;
      text-transform: uppercase;
      font-size: 16px;
      font-weight: 500;
      line-height: 20px;
      &:last-child {
        margin-bottom: 0;
      }
      &:hover {
        text-decoration: underline 2px;
      }
      img {
        margin-right: 10px;
      }
    }
  }
  &__cart {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: flex-end;
    &_link {
      display: flex;
      text-decoration: none;
      align-items: center;
    }
    &_count {
      width: 15px;
      height: 15px;
      background: #000;
      border-radius: 50%;
      color: var(--white);
      font-size: 11px;
      text-decoration: none;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: -10px;
      margin-bottom: -20px;
    }
    &_title {
      font-size: 16px;
      font-weight: 500;
      line-height: 20px;
      text-transform: uppercase;
      color: var(--black);
      margin-left: 8px;
      &:hover {
        text-decoration: underline 2px;
      }
    }
  }
  &__icon {
    display: block;
  }
}
</style>
