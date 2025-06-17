import { allArticles } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Balancer from 'react-wrap-balancer';
import { BlogCoverImage } from 'src/components/blog-cover-image';
import { BlogMetaInfo } from 'src/components/blog-meta-info';
import { LayoutWrapper } from 'src/components/layout-wrapper';
import { mdxComponents } from 'src/components/mdx-components';
import { styled } from 'styled-system/jsx';
import { getOgImageUrl } from './util';

export const generateStaticParams = async () => allArticles.map((article) => ({ slug: article.slug }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const article = allArticles.find((article) => article.slug === params.slug);
  if (!article) throw new Error(`Article not found for slug: ${params.slug}`);

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      type: 'article',
      publishedTime: article.date + 'T00:00:00.000Z',
      authors: ['Dominik Sumer'],
      images: [getOgImageUrl(params.slug)],
    },
  };
};

export default function Page({ params }: { params: { slug: string } }) {
  const article = allArticles.find((article) => article.slug === params.slug);
  if (!article) throw new Error(`Article not found for slug: ${params.slug}`);

  // Parse the MDX file via the useMDXComponent hook.
  const MDXContent = useMDXComponent(article.body.code);

  // TODO: define common footer for each blog post
  return (
    <LayoutWrapper fontSize={['15px', '16px']}>
      <styled.h1
        fontSize={{ base: '2em', md: '2.2em', lg: '2.5em' }}
        lineHeight="1.25em"
        fontWeight="medium"
        css={{ '& a': { display: 'none' } }}
      >
        <Balancer>{article.title}</Balancer>
      </styled.h1>
      <BlogCoverImage slug={params.slug} />
      <BlogMetaInfo date={article.date} />
      <MDXContent components={mdxComponents} />
    </LayoutWrapper>
  );
}
