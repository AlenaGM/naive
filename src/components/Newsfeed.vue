<template>
  <div class="news">
    <div class="news__lead">
      <h1 class="news__lead_title">Немного об искусстве</h1>
      <div class="news__lead_content">
        Есть над чем задуматься: многие известные личности заблокированы в
        рамках своих собственных рациональных ограничений. Есть над чем
        задуматься: диаграммы связей, инициированные исключительно синтетически,
        рассмотрены исключительно в разрезе маркетинговых и финансовых
        предпосылок.
      </div>
      <button class="button">в магазин</button>
      <img
        src="img/news-background.jpg"
        alt="background"
        class="news__background"
      />
    </div>
    <div class="news__feed">
      <div class="news__article">
        <div class="news__article_image">
          <img src="/img/news-1.jpg" alt="news" />
        </div>
        <div>
          <h2 class="news__article_title">какая-то полезная инфа</h2>
          <div class="news__article_content">
            Кстати, реплицированные с зарубежных источников, современные
            исследования, которые представляют собой яркий пример
            континентально-европейского типа политической культуры, будут
            превращены в посмешище, хотя само их существование приносит
            несомненную пользу обществу. Таким образом, сложившаяся структура
            организации обеспечивает актуальность прогресса профессионального
            сообщества. Для современного мира сплочённость команды
            профессионалов не оставляет шанса для экономической целесообразности
            принимаемых решений.
          </div>
        </div>
      </div>

      <div class="news__article">
        <div>
          <h2 class="news__article_title">а вы знали?</h2>
          <div class="news__article_content">
            Высокий уровень вовлечения представителей целевой аудитории является
            четким доказательством простого факта: сложившаяся структура
            организации обеспечивает широкому кругу (специалистов) участие в
            формировании форм воздействия. В целом, конечно, внедрение
            современных методик прекрасно подходит для реализации дальнейших
            направлений развития. Внезапно, многие известные личности
            представлены в исключительно положительном свете.
          </div>
        </div>
        <div class="news__article_image">
          <img src="/img/news-2.jpg" alt="news" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.news {
  &__background {
    position: absolute;
    top: 0;
    width: 100%;
    max-width: 1160px;
    z-index: -1;
    display: block;
    @media screen and (max-width: 400px) {
      display: none;
    }
  }
  &__lead {
    margin: 136px 8% 110px 8%;
    padding: 80px 40px 0 40px;
    background-color: var(--white);
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 1092px) {
      padding: 40px 40px 0 40px;
      margin: 102px 8% 110px 8%;
    }
    @media screen and (max-width: 400px) {
      margin: 26px 0 50px 0;
      padding: 0;
    }
    &_title {
      font-size: 76px;
      font-weight: 600;
      line-height: 68px;
      letter-spacing: -0.025em;
      text-align: center;
      margin: 0;
      @media screen and (max-width: 1092px) {
        font-size: 57px;
        line-height: 52px;
      }
      @media screen and (max-width: 400px) {
        font-size: 48px;
      }
    }
    &_content {
      font-size: 24px;
      font-weight: 400;
      line-height: 31px;
      text-align: center;
      margin: 35px 0 35px 0;
      @media screen and (max-width: 400px) {
        text-align: left;
      }
    }
  }
  &__feed {
    @media screen and (max-width: 1092px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  &__article {
    display: grid;
    align-items: start;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 36px;
    margin-bottom: 170px;
    @media screen and (max-width: 400px) {
      margin-bottom: 28px;
    }
    @media screen and (max-width: 1092px) {
      max-width: 660px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 75px;
    }
    &:last-of-type {
      margin-bottom: 51px;
      @media screen and (max-width: 1092px) {
        display: flex;
        align-items: flex-start;
        flex-direction: column-reverse;
      }
    }
    &_image {
      display: block;
      max-width: 560px;
      img {
        max-width: 100%;
      }
    }
    &_title {
      font-size: 32px;
      font-weight: 600;
      line-height: 29px;
      text-transform: uppercase;
      margin: 0;
      @media screen and (max-width: 1092px) {
        margin-top: 36px;
      }

      @media screen and (max-width: 400px) {
        font-size: 24px;
      }
    }
    &_content {
      margin-top: 20px;
      font-size: 24px;
      font-weight: 400;
      line-height: 31px;
    }
  }

  .button {
    color: var(--black);
    background-color: var(--white);
    font-size: 18px;
    font-weight: 600;
    line-height: 22px;
    text-transform: uppercase;
    padding: 8px 24px;
    border: 1px solid var(--black);
    border-radius: 6px;
    cursor: pointer;
    &:hover {
      color: var(--white);
      background-color: var(--black);
    }
  }
}
</style>
