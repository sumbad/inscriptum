import type { NodeRef } from '@web-companions/gfc/@types';
import { render } from 'lit-html2';
import { AsyncDirective } from 'lit-html2/async-directive.js';
import { directive } from 'lit-html2/directive.js';

class RenderNode extends AsyncDirective {
  render(tpl: any, ref: NodeRef<unknown, Node | null | RenderNode>) {
    ref.current = this;

    return tpl;
  }
}

const renderNodeDirective = directive(RenderNode);

export function renderNode(tpl: any, ref: NodeRef<unknown, Node | null | RenderNode>) {
  if (ref.current instanceof HTMLElement) {
    render(tpl, ref.current);
    return undefined;
  }

  if (ref.current instanceof RenderNode) {
    ref.current.setValue(tpl);
  }

  return renderNodeDirective(tpl, ref);
}
