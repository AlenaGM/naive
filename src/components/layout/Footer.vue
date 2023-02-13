<template>
  <footer class="footer">
    <div class="footer__container container">
      <div class="footer__top">
        <div class="footer__logo">
          <router-link to="/"> Наивное<br />искусство </router-link>
        </div>
        <div class="footer__menu">
          <router-link
            class="footer__menu_link"
            :to="element.path"
            v-for="(element, i) in menu"
            :key="i"
          >
            {{ element.name }}
          </router-link>
        </div>
      </div>
      <div class="footer__copyright">
        <a href="#">Политика конфиденциальности</a>
        <div>Design by Lennie</div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import menu from "@/components/layout/menu.js";
</script>

<style lang="scss" scoped>
.footer {
  flex-shrink: 0;
  background: var(--white);
  border-top: solid 1px rgba(41, 45, 50, 0.2);
  @media screen and (max-width: 767px) {
    height: auto;
  }
  &__container {
    position: relative;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding-top: 24px;
    padding-bottom: 14px;
  }
  &__top {
    @media screen and (max-width: 767px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 24px;
    }
  }
  &__logo {
    margin-bottom: 33px;
    cursor: pointer;
    a {
      color: var(--black);
      text-decoration: none;
      font-size: 2rem;
      font-weight: 600;
      line-height: 90%;
      letter-spacing: -0.025em;
    }
    @media screen and (max-width: 767px) {
      text-align: left;
    }
    @media screen and (max-width: 450px) {
      font-size: 1.5rem;
    }
  }
  &__menu {
    margin-bottom: 42px;
    &_link {
      font-size: 1rem;
      font-weight: 500;
      line-height: 20px;
      text-transform: uppercase;
      text-decoration: none;
      margin-right: 50px;
      color: var(--black);
      &:hover {
        text-decoration: underline 2px;
      }
      &:last-child {
        margin-right: 0;
      }
      @media screen and (max-width: 767px) {
        margin-bottom: 12px;
        margin-right: 0;
      }
      @media screen and (max-width: 450px) {
        font-size: 12px;
      }
    }
    @media screen and (max-width: 767px) {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      margin-bottom: 12px;
    }
  }
  &__copyright {
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    a {
      text-decoration: none;
      color: var(--black);
      padding-bottom: 5px;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
