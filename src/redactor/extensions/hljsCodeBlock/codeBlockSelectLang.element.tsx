import { EG, p } from '@web-companions/gfc';
import { render } from 'lit-html2';
import { HLJS_LANGUAGES } from './utils';

export const codeBlockSelectLangElement = EG({
  props: {
    domCodeEl: p.req<HTMLElement>(),
    selectedLanguage: p.req<string>(),
    onChange: p.req<(language: string | null) => void>(),
  },
})(function* (params) {
  //
  const updateAttributes = (event: Event) => {
    const target = event.target as HTMLSelectElement;
    params.onChange(target.value === 'null' ? null : target.value);
  };

  while (true) {
    yield render(
      <>
        <pre>{params.domCodeEl}</pre>
        <select class='hljs-codeblock__select' contentEditable={false} value={params.selectedLanguage} onchange={updateAttributes}>
          <option value="null" selected={params.selectedLanguage == null}>
            auto
          </option>
          <option disabled={true}>—</option>
          {HLJS_LANGUAGES.map((lang) => (
            <option key={lang} value={lang} selected={params.selectedLanguage === lang}>
              {lang}
            </option>
          ))}
        </select>
      </>,
      this
    );
  }
});
