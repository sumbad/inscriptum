import { directive, Part } from 'lit-html';
import { TemplatePart } from 'lit-html/lib/template';

export const nodeRender = directive((tpl: TemplatePart, ref: { current: Part | null }) => {
  if (ref.current != null) {
    ref.current.setValue(tpl);
    ref.current.commit();
  }

  return (part: Part) => {
    ref.current = part;
    ref.current.setValue(tpl);
  };
});