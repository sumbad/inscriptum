import { Mark, mergeAttributes } from '@tiptap/core';
import { Link, LinkOptions } from '@tiptap/extension-link';
import { Mark as ProseMirrorMark } from 'prosemirror-model';

interface LinkWithTooltipOptions extends LinkOptions {
  onRenderHTML?: (props: { mark: ProseMirrorMark<any>; HTMLAttributes: Record<string, any> }) => void;
}

export const LinkWithTooltip = Link.extend<LinkWithTooltipOptions>({
  renderHTML(props) {
    if(typeof this.options.onRenderHTML === 'function') {
      this.options.onRenderHTML(props)
    }

    return ['a', mergeAttributes(this.options.HTMLAttributes, props.HTMLAttributes), 0];
  },
});
