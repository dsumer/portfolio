import { Flex, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';
import NextImage from 'next/image';
import { TransformedTweet } from '../../utils/tweets';

interface Props {
  data: TransformedTweet;
}

export const TweetAuthor = ({ data }: Props) => {
  const { id, created_at, text, author, referenced_tweets, media } = data;
  const authorUrl = `https://twitter.com/${author.username}`;
  const profileImageUrl = author.profile_image_url.replace('_normal', '');

  return (
    <Flex as={LinkBox} sx={{ img: { borderRadius: '50%' } }} align="center" gap={3}>
      <NextImage alt={author.username} height={48} width={48} src={profileImageUrl} />
      <Flex direction="column" lineHeight="short">
        <Text _groupHover={{ textDecor: 'underline' }} fontSize="lg" fontWeight="semibold">
          <LinkOverlay href={authorUrl} isExternal>
            {author.name}
          </LinkOverlay>
        </Text>
        <Text color="gray.500">@{author.username}</Text>
      </Flex>
    </Flex>
  );
};
