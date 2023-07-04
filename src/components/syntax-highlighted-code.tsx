import shiki from 'shiki';
import { styled } from 'styled-system/jsx';

let highlighter: shiki.Highlighter | null = null;

interface Props {
  children: string;
  className?: string;
}

export const SyntaxHighlightedCode = async ({ className = '', children }: Props) => {
  if (!highlighter) {
    highlighter = await shiki.getHighlighter({ theme: 'css-variables' });
  }
  const language = className.replace('language-', '').split(':')[0];
  const highlightedCode = highlighter
    .codeToHtml(children, { lang: language })
    .replace(/<pre class="shiki(.*?)>/gi, '')
    .replace(/<\/pre>$/gi, '')
    .replace('<code>', '')
    .replace(/<\/code>$/gi, '');

  return <styled.code dangerouslySetInnerHTML={{ __html: highlightedCode }} />;
};
