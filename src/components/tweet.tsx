import Image from 'next/image';
import { Tweet as _Tweet, TweetComponents } from 'react-tweet';
import { styled } from 'styled-system/jsx';

const components: TweetComponents = {
  AvatarImg: ({ src, ...props }) => <Image {...props} src={src.replace('_normal', '')} />,
  MediaImg: (props) => <Image {...props} fill unoptimized />,
};

interface Props {
  id: string;
}

export const Tweet = ({ id }: Props) => {
  return (
    <styled.div
      css={{
        '& > .react-tweet-theme': {
          '--tweet-container-margin': '0!important',
          '--tweet-body-line-height': '1.25!important',
          '--tweet-body-font-size': { base: '14px!important', md: '16px!important' },
          transition: 'all 0s!important',
        },
      }}
    >
      <_Tweet id={id} components={components} />
    </styled.div>
  );
};
