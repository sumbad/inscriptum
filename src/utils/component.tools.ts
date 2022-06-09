import { from, Subject } from 'rxjs';
import { Unpacked } from './types';

/**
 * Wrap a service function to run it and observe the result
 *
 * @param func
 * @returns
 */
export function supervise<T extends (...args: any[]) => any>(func: T) {
  type FuncResult = Unpacked<ReturnType<typeof func>>;
  const subject = new Subject<FuncResult>();

  return {
    $: subject,
    _: (...params: Parameters<typeof func>) =>
      from(func(...params)).subscribe({
        next: (v: FuncResult) => subject.next(v),
        error: (e) => subject.error(e),
      }),
  };
}

// TODO: replace /n, tabs and several spaces to one space
export const css = String.raw;

export function setStyle(style: string, node: ShadowRoot | Element) {
  if (
    window.ShadowRoot &&
    'adoptedStyleSheets' in Document.prototype &&
    'replace' in CSSStyleSheet.prototype &&
    node instanceof ShadowRoot
  ) {
    const sheet = new CSSStyleSheet();
    sheet['replaceSync'](style);
    node['adoptedStyleSheets'] = [sheet];
  } else {
    let styleEl = node.querySelector('style');
    if (styleEl == null) {
      styleEl = document.createElement('style');
      styleEl.innerHTML = style;
      node.insertBefore(styleEl, node.firstChild);
    } else {
      styleEl.innerHTML = style;
    }
  }
}
