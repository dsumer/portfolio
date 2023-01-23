import { Box, Flex, FlexProps, Icon, Link, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';
import NextImage from 'next/image';
import React from 'react';
import { BsFillPlayFill } from 'react-icons/bs';
import { TransformedTweet } from '../../utils/tweets';
import { TweetActions } from './actions';
import { TweetAuthor } from './author';

const LOCALE = 'en-US';
const tweetTimeFormatter = new Intl.DateTimeFormat(LOCALE, { hour: '2-digit', minute: '2-digit' });
const tweetDateFormatter = new Intl.DateTimeFormat(LOCALE, {
  day: '2-digit',
  month: 'short',
  year: 'numeric',
});

const TwitterLogo = () => (
  <svg viewBox="328 355 335 276" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M 630, 425    A 195, 195 0 0 1 331, 600    A 142, 142 0 0 0 428, 570    A  70,  70 0 0 1 370, 523    A  70,  70 0 0 0 401, 521    A  70,  70 0 0 1 344, 455    A  70,  70 0 0 0 372, 460    A  70,  70 0 0 1 354, 370    A 195, 195 0 0 0 495, 442    A  67,  67 0 0 1 611, 380    A 117, 117 0 0 0 654, 363    A  65,  65 0 0 1 623, 401    A 117, 117 0 0 0 662, 390    A  65,  65 0 0 1 630, 425    Z"
      style={{ fill: '#3BA9EE' }}
    />
  </svg>
);

interface Props extends FlexProps {
  data: TransformedTweet;
}

export const Tweet = ({ data, ...flexProps }: Props) => {
  const { id, created_at, text, author, referenced_tweets, media } = data;
  const tweetUrl = `https://twitter.com/${author.username}/status/${id}`;
  const createdAt = new Date(created_at);

  const formattedText = text.replace(/https:\/\/[\n\S]+/g, '');
  const quoteTweet = referenced_tweets && referenced_tweets.find((t) => t.type === 'quoted');

  return (
    <Flex
      direction="column"
      border="1px solid"
      borderColor="lightGray"
      boxShadow="sm"
      rounded="xl"
      p={5}
      gap={5}
      maxW="100%"
      {...flexProps}
    >
      <Flex justify="space-between">
        <TweetAuthor data={data} />
        <Link href={tweetUrl} isExternal>
          <TwitterLogo />
        </Link>
      </Flex>
      <Flex direction="column" gap={3}>
        <Text whiteSpace="pre-wrap">{formattedText}</Text>
        {media && media.length ? (
          <Box as={LinkBox} pos="relative" rounded="lg" overflow="hidden">
            {media.map((m) => (
              <React.Fragment key={m.media_key}>
                <NextImage
                  alt={text}
                  height={m.height}
                  width={m.width}
                  src={m.type === 'video' ? m.preview_image_url : m.url}
                />
                {m.type === 'video' && (
                  <Flex align="center" justify="center" pos="absolute" inset={0} bg="blackAlpha.300">
                    <Flex align="center" justify="center" rounded="50%" bg="blackAlpha.600" p={1.5}>
                      <Icon as={BsFillPlayFill} boxSize={12} color="white" transform="translateX(3px)" />
                    </Flex>
                  </Flex>
                )}
              </React.Fragment>
            ))}
            <LinkOverlay href={tweetUrl} isExternal />
          </Box>
        ) : null}
        {quoteTweet ? <Tweet data={quoteTweet} /> : null}
      </Flex>
      <Flex direction="column" gap={3}>
        <Box>
          <Link fontSize="sm" color="gray.500" href={tweetUrl} isExternal>
            <time title={`Time Posted: ${createdAt.toUTCString()}`} dateTime={createdAt.toISOString()}>
              {tweetTimeFormatter.format(createdAt)}&nbsp;·&nbsp;{tweetDateFormatter.format(createdAt)}
            </time>
          </Link>
        </Box>
        <TweetActions data={data} />
      </Flex>
    </Flex>
  );
};
