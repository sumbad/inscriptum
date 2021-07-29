import { render, svg } from 'lit-html2';
import { AsyncDirective } from 'lit-html2/async-directive';
import { directive } from 'lit-html2/directive';

// TODO: change to -> import { NodeRef } from '@web-companions/gfc/sdk/node';
export interface NodeRef<P = unknown, C = Node | null, V = any> {
  current: C;
  generator: Generator<any, void, P | undefined>;
  next: (...args: [] | [P]) => Promise<void>;
  isScheduledNext: boolean;
  props: P;
  value?: V;
}

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
