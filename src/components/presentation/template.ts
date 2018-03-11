export default (html, scope) => html`

  <style>
    .slide1 {
      background-color: #2b334f;
      height: 100%;
    }
  
    .slide2 {
      background-color: #267481;
      height: 100%;
    }
  
    .slide3 {
      background-color: #262f81;
      height: 100%;
    }
  
    .slide4 {
      background-color: #fcb052;
      height: 100%;
    }
  
    .slide5 {
      background-color: #f06a59;
      height: 100%;
    }
  </style>
  
  
  <um-slides>
  
    <um-slide id="slide1" visible>
      <div class="slide slide_50-50">
        <div class="slide__text">
          <span class="text-note">17 февраля 2018 г.</span>
          <h1 class="text-title">Web components</h1>
          <h3 class="text-caption">Стандарты разработки компонентов
            <img src="slide/imgs/arrow-right.svg" />
          </h3>
        </div>
        <div class="slide__object"></div>
      </div>
    </um-slide>
  
    <um-slide id="slide2">
      <div class="slide slide_50-50">
        <div class="slide__text">
          <span class="text-note">немного теории</span>
          <h1 class="text-title">Web components это набор спецификаций W3C</h1>
          <h3 class="text-caption">Рецепт Web Components прост - это три фундаментальных блока: HTML, CSS и JavaScript.
            <img src="slide/imgs/arrow-right.svg" />
          </h3>
          <div class="text-desc">
            HTML определяет каркас компонента, является разметкой как и для обычной страницы.
            <br/> CSS отвечает за визуальное отображение.
            <br/> JavaScript - это логика компонента, его поведение и функциональность.
            <br/>
            <br/> Спецификации Web Components позволяют нам использовать эти три технологии вместе для построения собственных компонентов.
          </div>
        </div>
        <div class="slide__object"></div>
      </div>
    </um-slide>
  
    <um-slide id="slide3">
      <div class="slide slide_50-50">
        <div class="slide__text">
          <span class="text-note">область применения</span>
          <h1 class="text-title">Front-end microservices</h1>
          <h3 class="text-caption">создание слабосвязанных UI элементов
            <img src="slide/imgs/arrow-right.svg" />
          </h3>
          <div class="text-desc">
            Возможно создать как монолитное SPA так и отдельный элемент в приложении на одном из фреймворков/библиотек.
            <br/>
            <br/> Каждый из компонентов является отдельным элементом со своей функциональностью.
            <br/>
            <br/> Набор простых компонентов образует комплексную систему.
          </div>
        </div>
        <div class="slide__object"></div>
      </div>
    </um-slide>
  
    <um-slide id="slide4">
      <div class="slide slide_50-50">
        <div class="slide__text">
          <span class="text-note">производительность</span>
          <h1 class="text-title">Performance или идеальные условия</h1>
          <h3 class="text-caption">For the initial load, Polymer was 6x faster than Angular
            <img src="slide/imgs/arrow-right.svg" />
          </h3>
        </div>
        <div class="slide__object"></div>
      </div>
    </um-slide>
  
    <um-slide id="slide5">
      <div class="slide slide_50-50">
        <div class="slide__text">
          <span class="text-note">инструменты</span>
          <h1 class="text-title">Комплексные решения</h1>
          <h3 class="text-caption">frameworks
            <img src="slide/imgs/arrow-right.svg" />
          </h3>
        </div>
        <div class="slide__object"></div>
      </div>
    </um-slide>
  
    <um-slide id="slide6">
      <div class="slide slide_50-50">
        <div class="slide__text">
          <span class="text-note">инструменты</span>
          <h1 class="text-title">Render функции</h1>
          <h3 class="text-caption">дополнительные библиотеки
            <img src="slide/imgs/arrow-right.svg" />
          </h3>
          <div class="text-desc">
            Упрощение работы, оптимизация создания и обновления компонента. Аналогично VDOM, но проще, меньше и использует встроенные
            возможности ES 2015.
            <br/>
            <br/> Обе библиотеки использую template. Это позволяет снизить накладные расходы и не выходить за пределы спецификаций.
            <br/>
            <br/> Высокая скорость и гибкость использования.
          </div>
        </div>
        <div class="slide__object"></div>
      </div>
    </um-slide>
  
    <um-slide id="slide7">
      <div class="slide slide_100">
        <div class="slide__object"></div>
      </div>
    </um-slide>
  
    <um-slide id="slide8">
      <div class="slide slide_100">
        <div class="slide__object"></div>
      </div>
    </um-slide>
  
    <um-slide id="slide9">
      <div class="slide slide_rows-30-70">
        <div class="slide__text">
          <span class="text-note">будущее</span>
          <h1 class="text-title">Сводка</h1>
          <h3 class="text-caption">поддержка спецификаций браузерами
            <img src="slide/imgs/arrow-right.svg" />
          </h3>
        </div>
        <div class="slide__object"></div>
      </div>
    </um-slide>
  
    <um-slide id="slide10">
      <div class="slide slide_100">
        <div class="slide__object"></div>
      </div>
    </um-slide>
  
    <um-slide id="slide11">
      <div class="slide slide_50-50">
        <div class="slide__text">
          <span class="text-note">17 февраля 2018 г.</span>
          <h1 class="text-title">Простое должно быть простым</h1>
          <h3 class="text-caption">97 этюдов для архитекторов программных систем
            <img src="slide/imgs/arrow-right.svg" />
          </h3>
        </div>
        <div class="slide__object"></div>
      </div>
    </um-slide>

  </um-slides>
`;