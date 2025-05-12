import { TbBrandBluesky, TbBrandGithub, TbBrandLinkedin, TbBrandThreads, TbBrandX } from 'react-icons/tb';
import { Flex, FlexProps } from 'styled-system/jsx';
import { Link } from './common/link';

export const SocialIcons = (props: FlexProps) => {
  return (
    <Flex align="center" mt={4} gap={3} color="gray.600">
      <Link href="https://x.com/dominiksumer" isExternal>
        <TbBrandX size={20} />
      </Link>
      <Link href="https://bsky.app/profile/dominiksumer.com" isExternal>
        <TbBrandBluesky size={20} />
      </Link>
      <Link href="https://www.linkedin.com/in/dominik-sumer/" isExternal>
        <TbBrandLinkedin size={20} />
      </Link>
      <Link href="https://www.threads.com/@dominik.sumer" isExternal>
        <TbBrandThreads size={20} />
      </Link>
      <Link href="https://github.com/dsumer" isExternal>
        <TbBrandGithub size={20} />
      </Link>
    </Flex>
  );
};
