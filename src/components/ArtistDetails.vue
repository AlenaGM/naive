<template>
  <div class="artist">
    <h2 class="artist__title">автор</h2>
    <div class="artist__card">
      <div class="artist__image">
        <img src="/img/artist.jpg" alt="artist" />
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
          повседневности. Работы художника находятся в Музее наивного искусства
          (Москва), Музее традиционного искусства народов мира (Москва), Музее
          органической культуры (Коломна), Государственном музее изобразительных
          искусств РТ, Музее Казанского Кремля, Национальном культурном центре
          «Казань», а также в частных собраниях — Галеев-галерее (Москва),
          Арт-Наив галерее (Москва) и других коллекциях Москвы, Пскова, Казани,
          а также США, Канады, Аргентины, Германии, Франции, Голландии, Бельгии,
          Португалии.
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
    font-size: 32px;
    font-weight: 600;
    line-height: 29px;
    text-transform: uppercase;
    margin: 60px 0 34px 0;
    @media screen and (max-width: 400px) {
      font-size: 24px;
      margin-top: 17px;
    }
  }
  &__card {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 580px;
    column-gap: 40px;
    margin-bottom: 220px;
    @media screen and (max-width: 1092px) {
      grid-template-columns: 1fr;
      max-width: 660px;
      justify-items: center;
    }
  }
  &__image {
    display: block;
    img {
      max-width: 100%;
    }
  }
  &__name {
    font-size: 32px;
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
    margin-top: 15px;
    font-size: 18px;
    font-weight: 400;
    line-height: 23px;
  }
}
</style>
