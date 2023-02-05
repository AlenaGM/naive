<template>
  <div class="artist">
    <h2 class="artist__title">художник</h2>
    <div class="artist__card">
      <div class="artist__image">
        <img src="/img/artist-1.jpg" alt="artist" />
      </div>
      <div>
        <h3 class="artist__name">Виктор Тимофеев</h3>
        <div class="artist__description">
          В творчестве В. Тимофеева гармонично соединились элементы
          экспрессионизма и примитивизма, народного лубка и декоративного
          искусства, иконописи. Столь разнородные стилевые направления дают
          возможность визуальных «путешествий» в мир литературы, театра,
          истории, фольклора и религии. Свою роль играют надписи и даты
          исполнения картин и рисунков, как своего рода рефлексии
          повседневности. <br /><br />
          Работы художника находятся в Музее наивного искусства (Москва), Музее
          традиционного искусства народов мира (Москва), Музее органической
          культуры (Коломна), Государственном музее изобразительных искусств РТ,
          Музее Казанского Кремля, Национальном культурном центре «Казань», а
          также в частных собраниях — Галеев-галерее (Москва), Арт-Наив галерее
          (Москва) и других коллекциях Москвы, Пскова, Казани, а также США,
          Канады, Аргентины, Германии, Франции, Голландии, Бельгии, Португалии.
        </div>
      </div>
    </div>
    <div class="artist__paintings">
      <h4 class="artist__paintings_title">Работы художника</h4>
      <div class="artist__paintings_container">
        <div class="artist__paintings_item">
          <router-link to="/naive/artworks/:artworkId">
            <img src="/img/item-3.jpg" alt="painting" />
          </router-link>
        </div>
        <div class="artist__paintings_item">
          <router-link to="/naive/artworks/:artworkId">
            <img src="/img/item-4.jpg" alt="painting" />
          </router-link>
        </div>
        <div class="artist__paintings_item">
          <router-link to="/naive/artworks/:artworkId">
            <img src="/img/item-1.jpg" alt="painting" />
          </router-link>
        </div>
        <div class="artist__paintings_item">
          <router-link to="/naive/artworks/:artworkId">
            <img src="/img/item-3.jpg" alt="painting" />
          </router-link>
        </div>
        <div class="artist__paintings_item">
          <router-link to="/naive/artworks/:artworkId">
            <img src="/img/item-4.jpg" alt="painting" />
          </router-link>
        </div>
        <div class="artist__paintings_item">
          <router-link to="/naive/artworks/:artworkId">
            <img src="/img/item-1.jpg" alt="painting" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

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
  &__image {
    display: block;
    img {
      max-width: 100%;
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
