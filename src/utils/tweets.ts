import qs from 'qs';

const DOMINIK_USER_ID = '798465058061881344';

type TweetMedia = {
  media_key: string;
  type: string;
  preview_image_url: string;
  url: string;
  height: number;
  width: number;
};

type RawTweetType = {
  includes: {
    media: TweetMedia[];
    users: Array<{
      verified: boolean;
      url: string;
      profile_image_url: string;
      protected: boolean;
      username: string;
      name: string;
      id: string;
    }>;
    tweets: TweetData[];
  };
  data: TweetData[];
};

interface TweetData {
  text: string;
  type: string;
  referenced_tweets: TweetData[];
  public_metrics: {
    retweet_count?: number;
    reply_count: number;
    like_count: number;
    quote_count: number;
  };
  created_at: string;
  attachments: {
    media_keys: string[];
  };
  id: string;
  conversation_id: string;
  author_id: string;
}

export interface TransformedTweet extends TweetData {
  author: {
    verified: boolean;
    url: string;
    profile_image_url: string;
    protected: boolean;
    username: string;
    name: string;
    id: string;
  };
  media: TweetMedia[];
  referenced_tweets: TransformedTweet[];
}

export const getLatestTweet = async () => {
  const queryParams = qs.stringify({
    exclude: 'replies,retweets',
    expansions: 'author_id,attachments.media_keys,referenced_tweets.id,referenced_tweets.id.author_id',
    'tweet.fields':
      'attachments,author_id,public_metrics,created_at,id,conversation_id,in_reply_to_user_id,referenced_tweets,text',
    'user.fields': 'id,name,profile_image_url,protected,url,username,verified',
    'media.fields': 'duration_ms,height,media_key,preview_image_url,type,url,width,public_metrics',
  });

  const url = `https://api.twitter.com/2/users/${DOMINIK_USER_ID}/tweets?${queryParams}`;
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.TWITTER_API_KEY}`,
    },
  });

  const tweets = (await response.json()) as RawTweetType;

  const latestTweet = tweets.data.find((tweet) => tweet.conversation_id === tweet.id);
  if (!latestTweet) {
    return null;
  }

  const getAuthorInfo = (author_id: string) => {
    return tweets.includes.users.find((user) => user.id === author_id)!;
  };

  const getReferencedTweets = (mainTweet: TweetData) => {
    return (
      mainTweet?.referenced_tweets?.map((referencedTweet) => {
        const fullReferencedTweet = tweets.includes.tweets.find((tweet) => tweet.id === referencedTweet.id)!;

        return {
          ...fullReferencedTweet,
          type: referencedTweet.type,
          author: getAuthorInfo(fullReferencedTweet.author_id),
        };
      }) || []
    );
  };

  return {
    ...latestTweet,
    media:
      latestTweet?.attachments?.media_keys.map((key) =>
        tweets.includes.media.find((media) => media.media_key === key),
      ) || [],
    referenced_tweets: getReferencedTweets(latestTweet),
    author: getAuthorInfo(latestTweet.author_id),
  };
};
