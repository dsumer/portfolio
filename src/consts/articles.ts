import { metadata as chakra } from '../app/blog/(posts)/chakra-complements-webdevs/page.mdx';
import { metadata as startBlog } from '../app/blog/(posts)/how-and-why-to-start-blogging/page.mdx';
import { metadata as firstSideProject } from '../app/blog/(posts)/how-my-first-side-project-made-me-the-developer-i-am-today/page.mdx';
import { metadata as gumroad } from '../app/blog/(posts)/how-to-integrate-gumroad-as-payment-provider-for-your-saas/page.mdx';
import { metadata as reactOgImages } from '../app/blog/(posts)/how-to-use-react-to-generate-og-images/page.mdx';
import { metadata as publishTsLib } from '../app/blog/(posts)/publishing-a-typescript-library-in-2021/page.mdx';
import { metadata as stripe } from '../app/blog/(posts)/stripe-checkout-eu-vat/page.mdx';
import { metadata as trueq } from '../app/blog/(posts)/tech-stack-of-trueq/page.mdx';

interface BlogPost {
  title: string;
  description: string;
}

export const ARTICLES: Record<string, BlogPost> = {
  'how-to-use-react-to-generate-og-images': reactOgImages,
  'how-to-integrate-gumroad-as-payment-provider-for-your-saas': gumroad,
  'publishing-a-typescript-library-in-2021': publishTsLib,
  'how-my-first-side-project-made-me-the-developer-i-am-today': firstSideProject,
  'tech-stack-of-trueq': trueq,
  'how-and-why-to-start-blogging': startBlog,
  'stripe-checkout-eu-vat': stripe,
  'chakra-complements-webdevs': chakra,
};
