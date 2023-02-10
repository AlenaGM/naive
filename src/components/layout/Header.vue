<template>
  <header class="header">
    <div class="header__container container">
      <div class="header__menu">
        <div
          class="header__menu_mobile"
          @click="
            isOpenedMobileMenu = !isOpenedMobileMenu;
            isActiveSearch = false;
          "
          v-bind:class="{ _active: isOpenedMobileMenu }"
        >
          <span />
        </div>
        <div class="header__menu_home">
          <router-link to="/naive/">
            <img src="/svg/menu-shop.svg" alt="home" class="header__icon" />
          </router-link>
        </div>
      </div>

      <div class="header__dropdown" v-if="isOpenedMobileMenu">
        <router-link
          class="header__dropdown_link"
          :to="element.path"
          v-for="(element, i) in menu"
          :key="i"
          @click="isOpenedMobileMenu = false"
        >
          <img :src="element.image" alt="menu-icon" class="header__icon" />
          {{ element.name }}
        </router-link>
      </div>

      <div class="header__cart">
        <router-link to="/naive/cart" class="header__cart_link">
          <span class="header__cart_count" v-if="cartStore.cart.length">
            {{ cartStore.cart.length }}
          </span>
          <img src="/svg/cart.svg" alt="cart" class="header__icon" />
          <span class="header__cart_title">корзина</span>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { useCartStore } from "@/store/cart.js";
import menu from "@/components/layout/menu.js";

const isOpenedMobileMenu = ref(false);
const cartStore = useCartStore();
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
      position: relative;
      width: 36px;
      height: 24px;
      cursor: pointer;
      display: block;
      margin-right: 32px;
      @media screen and (max-width: 500px) {
        margin-right: 16px;
      }
      span,
      &::before,
      &::after {
        left: 0;
        position: absolute;
        height: 4px;
        width: 100%;
        transition: all 0.2s ease 0s;
        background-color: var(--black);
        border-radius: 20px;
      }
      &::before,
      &::after {
        content: "";
      }
      &::before {
        top: 0;
      }
      &::after {
        bottom: 0;
      }
      span {
        top: 12px;
        transform: scale(1) translate(0px, -50%);
      }
      &._active {
        span {
          transform: scale(0) translate(0px, -50%);
        }
        &::before {
          top: 48%;
          transform: rotate(-42deg) translate(0px, -50%);
        }
        &::after {
          bottom: 50%;
          transform: rotate(42deg) translate(0px, 50%);
        }
      }
    }
    &_home {
      position: relative;
      width: 36px;
      height: 24px;
      cursor: pointer;
      display: block;
      img {
        width: 100%;
        max-width: 24px;
      }
    }
  }
  &__dropdown {
    position: fixed;
    background: var(--white);
    top: 72px;
    padding: 40px 70px 60px 30px;
    border-radius: 8px;
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
        max-height: 24px;
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
      align-items: flex-end;
    }
    &_count {
      width: 15px;
      height: 15px;
      background: var(--black);
      border-radius: 50%;
      color: var(--white);
      font-size: 11px;
      text-decoration: none;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: -10px;
      margin-bottom: -6px;
      z-index: 1;
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
      @media screen and (max-width: 500px) {
        display: none;
      }
    }
  }
  &__icon {
    display: block;
  }
}
</style>
