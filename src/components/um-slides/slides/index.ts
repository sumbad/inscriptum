export default (html, scope) => html`
<um-slide visible>
  <div class="ok-full">
    <div class="conteudo">
      <span class="year">17 февраля 2018 г.</span>
      <h1>Web components</h1>
      <h3>Стандарты разработки компонентов
        <img src="slide/imgs/arrow-right.svg" />
      </h3>
    </div>
    <div class="slide1"></div>
  </div>
</um-slide>

<um-slide>
  <div class="ok-full">
    <div class="conteudo" style="top: 25%;">
      <span class="year">немного теории</span>
      <h1>Web components это набор спецификаций W3C</h1>
      <h3>Рецепт Web Components прост - это три фундаментальных блока: HTML, CSS и JavaScript.
        <img src="slide/imgs/arrow-right.svg" />
      </h3>
      <div class="description">
        HTML определяет каркас компонента, является разметкой как и для обычной страницы.
        <br/> CSS отвечает за визуальное отображение.
        <br/> JavaScript - это логика компонента, его поведение и функциональность.
        <br/>
        <br/> Спецификации Web Components позволяют нам использовать эти три технологии вместе для построения собственных компонентов.
      </div>
    </div>
    <div class="slide2"></div>
  </div>
</um-slide>

<um-slide>
  <div class="ok-full">
    <div class="conteudo" style="top: 25%;">
      <span class="year">область применения</span>
      <h1>Front-end microservices</h1>
      <h3>создание слабосвязанных UI элементов
        <img src="slide/imgs/arrow-right.svg" />
      </h3>
      <div class="description">
        Возможно создать как монолитное SPA так и отдельный элемент в приложении на одном из фреймворков/библиотек.
        <br/>
        <br/> Каждый из компонентов является отдельным элементом со своей функциональностью.
        <br/>
        <br/> Набор простых компонентов образует комплексную систему.
      </div>
    </div>
    <div class="slide3"></div>
  </div>
</um-slide>

<um-slide>
  <div class="ok-full">
    <div class="conteudo">
      <span class="year">производительность</span>
      <h1>Performance или идеальные условия</h1>
      <h3>For the initial load, Polymer was 6x faster than Angular
        <img src="slide/imgs/arrow-right.svg" />
      </h3>
    </div>
    <div class="slide4"></div>
  </div>
</um-slide>

<um-slide>
  <div class="ok-full">
    <div class="conteudo">
      <span class="year">инструменты</span>
      <h1>Комплексные решения</h1>
      <h3>frameworks
        <img src="slide/imgs/arrow-right.svg" />
      </h3>
    </div>
    <div class="slide5"></div>
  </div>
</um-slide>

<um-slide>
  <div class="ok-full">
    <div class="conteudo" style="top: 30%;">
      <span class="year">инструменты</span>
      <h1>Render функции</h1>
      <h3>дополнительные библиотеки
        <img src="slide/imgs/arrow-right.svg" />
      </h3>
      <div class="description">
        Упрощение работы, оптимизация создания и обновления компонента. Аналогично VDOM, но проще, меньше и использует встроенные
        возможности ES 2015.
        <br/>
        <br/> Обе библиотеки использую template. Это позволяет снизить накладные расходы и не выходить за пределы спецификаций.
        <br/>
        <br/> Высокая скорость и гибкость использования.
      </div>
    </div>
    <div class="slide6"></div>
  </div>
</um-slide>

<um-slide>
  <div class="ok-full">
    <div class="slide6_1"></div>
  </div>
</um-slide>

<um-slide>
  <div class="ok-full">
    <div class="slide7"></div>
  </div>
</um-slide>

<um-slide>
  <div class="ok-full">
    <div class="slide7_1">
      <div class="conteudo" style="top: 20%;">
        <span class="year">будущее</span>
        <h1>Сводка</h1>
        <h3>поддержка спецификаций браузерами
          <img src="slide/imgs/arrow-right.svg" />
        </h3>
      </div>
    </div>
  </div>
</um-slide>

<um-slide>
  <div class="ok-full">
    <div class="slide8"></div>
  </div>
</um-slide>

<um-slide>
  <div class="ok-full">
    <div class="conteudo">
      <span class="year">17 февраля 2018 г.</span>
      <h1>Простое должно быть простым</h1>
      <h3>97 этюдов для архитекторов программных систем
        <img src="slide/imgs/arrow-right.svg" />
      </h3>
    </div>
    <div class="slide9"></div>
  </div>
</um-slide>
`;


export const styles = require('./style.scss');