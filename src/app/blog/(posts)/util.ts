import { websiteUrl } from '../../../consts/common';

export const getOgImageUrl = (slug: string) => {
  return `${websiteUrl}/og?slug=${slug}`;
};
