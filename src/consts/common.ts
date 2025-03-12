export const websiteUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${process.env.PORT || 3000}`;
export const PINNED_TWEET_ID = '1899452257411952949';
