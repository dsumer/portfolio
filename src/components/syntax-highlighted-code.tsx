import { use } from 'react';
import * as shiki from 'shiki';
import { styled } from 'styled-system/jsx';

interface Props {
  children: string;
  className?: string;
}

export const SyntaxHighlightedCode = ({ className = '', children }: Props) => {
  const highlighter = use(shiki.getHighlighter({ theme: 'css-variables' }));
  const language = className.replace('language-', '').split(':')[0];
  const highlightedCode = highlighter
    .codeToHtml(children, { lang: language })
    .replace(/<pre class="shiki(.*?)>/gi, '')
    .replace(/<\/pre>$/gi, '')
    .replace('<code>', '')
    .replace(/<\/code>$/gi, '');

  return <styled.code dangerouslySetInnerHTML={{ __html: highlightedCode }} />;
};
