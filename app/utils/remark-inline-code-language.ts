import { escapeHtml } from '@cutting/util';
import { visit } from 'unist-util-visit';

type Tree = Parameters<typeof visit>[0];

// export interface FrontMatterNode extends Node {
//   type: string;
//   value: string;
// }

export function remarkInlineCodeLanguage() {
  return (tree: Tree): void =>
    visit(tree, 'inlineCode', (node: any) => {
      const className = `language-typescript`;

      node.type = 'html';
      node.value = `<code class="${className}">${escapeHtml(node.value)}</code>`;
    });
}
