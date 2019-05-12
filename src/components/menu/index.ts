import { AbstractElement, Define } from 'abstract-element';
import { html } from 'lit-html';
import litRender from 'abstract-element/render/lit';



@Define('inscriptum-menu')
export class MenuComponent extends AbstractElement {
  styles = html`<style>${require('./style.less')}</style>`;

  constructor() {
    super(litRender, false);
  }


  render() {
    return html`
      ${this.styles}
      <div class="navbar-spacer"></div>
      <nav class="navbar">
        <div class="container">
          <ul class="navbar-list">
            <li class="navbar-item"><a class="navbar-link" href="/notes">Конспекты</a></li>
            <li class="navbar-item"><a class="navbar-link" href="/drafts">Черновики</a></li>
            <li class="navbar-item"><a class="navbar-link" href="#">Слайды</a></li>
          </ul>
        </div>
      </nav>
    `;
  }
}