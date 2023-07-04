import { metadata as chakra } from '../app/blog/(posts)/chakra-complements-webdevs/page.mdx';
import { metadata as startBlog } from '../app/blog/(posts)/how-and-why-to-start-blogging/page.mdx';
import { metadata as stripe } from '../app/blog/(posts)/stripe-checkout-eu-vat/page.mdx';

interface BlogPost {
  title: string;
  description: string;
}

export const ARTICLES: Record<string, BlogPost> = {
  'how-and-why-to-start-blogging': startBlog,
  'stripe-checkout-eu-vat': stripe,
  'chakra-complements-webdevs': chakra,
};
