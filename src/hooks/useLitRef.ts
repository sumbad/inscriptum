import { useState } from '@web-companions/fc';
import { AttributePart, directive } from 'lit-html';

export function useLitRef<T extends Element = HTMLElement>(): { current: T | null; ref: () => void } {
  const [state] = useState<any>(() => {
    let _part: AttributePart;
    return {
      get current() {
        return _part?.committer?.element as T;
      },
      ref: directive(() => (part: AttributePart) => {
        _part = part;
      }),
    };
  });

  return state;
}