import { TemplateResult, html } from 'lit-html';
import { LoadingProgressBarProps } from 'loading-progress-bar';

interface IProps {
  styles: TemplateResult;
  isPreloader: boolean;
  tooltip: HTMLElement;
  loaderConfig: LoadingProgressBarProps['config'];
  loadingRef: {current: {generateProgress?: Generator, togglePause?: (isPause?: boolean) => void;}}
}
interface IHandlers {
  publish: () => void;
}


export default (props: IProps, handlers: IHandlers) => html`
${props.styles}

<loading-progress-bar .config=${props.loaderConfig} .ref=${props.loadingRef}></loading-progress-bar>

<um-preloader ?loading=${props.isPreloader}>
  <div class="tl_page_wrap">

    <div class="tl_page">
      <section class="tl_article">
        <header class="tl_article_header">
          <h1 dir="auto"></h1>
          <address dir="auto">
            <a rel="author"></a>
            <time datetime=""></time>
          </address>
        </header>
        <article id="_tl_editor" class="tl_article_content">
          <h1><br></h1>
          <address><br></address>
          <p><br></p>
        </article>
        ${props.tooltip}
        <aside class="tl_article_buttons">
          <div class="account account_top"></div>
          <a id="_edit_button" class="button edit_button">Edit</a>
          <button @click=${handlers.publish} class="button publish_button">Publish</button>
          <div class="account account_bottom"></div>
          <div id="_error_msg" class="error_msg"></div>
        </aside>
      </section>
    </div>
  </div>
</um-preloader>

<div id="_tl_alerts" class="tl_alerts"></div>
`;
