export const websiteUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${process.env.PORT || 3000}`;
export const PINNED_TWEET_ID = '1642861995518054403';
