import { allArticles } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import { Box, Flex, LinkBox, LinkOverlay, styled } from 'styled-system/jsx';
import Avatar from '../../public/images/avatar2.png';
import { ArticlePreview } from '../components/article-preview';
import { Divider } from '../components/common/divider';
import { Image } from '../components/common/image';
import { Link } from '../components/common/link';
import { Text } from '../components/common/text';
import { LayoutWrapper } from '../components/layout-wrapper';
import { NewsletterForm } from '../components/newsletter-form';
import { SnappifyLogo } from '../components/snappify-logo';
import { Tweet } from '../components/tweet';
import { WavingHand } from '../components/waving-hand';
import { PINNED_TWEET_ID } from '../consts/common';
import { VemetricLogo } from 'src/components/vemetric-logo';
import { TbBrandGithub, TbBrandLinkedin, TbBrandX } from 'react-icons/tb';

export default async function Page() {
  const articles = allArticles.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <>
      <LayoutWrapper>
        <Flex direction={['column', 'column', 'row']} gap={[6, 8, 20]} mx="auto" align="center" justify="space-between">
          <Box w={['330px', '385px']}>
            <styled.h1 fontSize={['30px', '36px']} fontWeight="semibold" mb={4}>
              Hey, I&apos;m Dominik <WavingHand />
            </styled.h1>
            <Text fontSize={['20px', '24px']}>
              I love to bring my own ideas to life and strive to make a living from them.
            </Text>
            <Flex align="center" mt={4} gap={3} color="gray.600" _dark={{ color: 'gray.400' }}>
              <Link href="https://x.com/dominiksumer" isExternal>
                <TbBrandX size={20} />
              </Link>
              <Link href="https://www.linkedin.com/in/dominik-sumer/" isExternal>
                <TbBrandLinkedin size={20} />
              </Link>
              <Link href="https://github.com/dsumer" isExternal>
                <TbBrandGithub size={20} />
              </Link>
            </Flex>
          </Box>
          <Image
            priority
            src={Avatar}
            alt="Avatar of Dominik Sumer"
            width={200}
            height={200}
            filter="drop-shadow(0 0 10px rgba(0,0,0,0.14))"
            transform="translateZ(0)"
            borderRadius="lg"
            placeholder="blur"
          />
        </Flex>
      </LayoutWrapper>
      <Divider />
      <LayoutWrapper>
        <Box
          display="grid"
          w={['95%', '85%', '100%']}
          mx="auto"
          gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }}
          gap={{ base: 20, md: 4 }}
        >
          <Flex direction="column" align="center" gap={5}>
            <Text fontSize="lg" fontWeight="semibold">
              Pinned Tweet
            </Text>
            <Tweet id={PINNED_TWEET_ID} />
          </Flex>
          <Flex direction="column" align="center" gap={10}>
            <Text fontSize="lg" fontWeight="semibold">
              What I&apos;m currently working on
            </Text>
            <Flex direction="column" align="center" gap={3}>
              <LinkBox
                display="flex"
                alignItems="center"
                justifyContent="center"
                rounded="lg"
                maxW="100%"
                bg="linear-gradient(125.53deg, #FF9979 0%, #811FFF 100%);"
                py={5}
                px={8}
                color="white"
                transition="all .3s"
                _hover={{ transform: 'scale(1.025)' }}
                _active={{ transform: 'scale(1)' }}
              >
                <SnappifyLogo />
                <LinkOverlay href="https://snappify.com" target="_blank" />
              </LinkBox>
              <Text fontWeight="500" maxW="350px" textAlign="center">
                snappify is a powerful design tool enabling developers to create stunning presentations.
              </Text>
            </Flex>
            <Flex direction="column" align="center" gap={3}>
              <LinkBox
                display="flex"
                alignItems="center"
                justifyContent="center"
                rounded="lg"
                maxW="100%"
                bg="#313247"
                py={5}
                px={8}
                color="white"
                transition="all .3s"
                _hover={{ transform: 'scale(1.025)' }}
                _active={{ transform: 'scale(1)' }}
              >
                <VemetricLogo />
                <LinkOverlay href="https://vemetric.com" target="_blank" />
              </LinkBox>
              <Text fontWeight="500" maxW="350px" textAlign="center">
                Vemetric aims to provide you with simple, yet powerful analytics for your product / website.
              </Text>
            </Flex>
          </Flex>
        </Box>
      </LayoutWrapper>
      <Divider />
      <LayoutWrapper>
        <Box>
          <styled.h2 fontSize={['24px', '28px']} textAlign="center">
            Latest Articles
          </styled.h2>
          <Flex direction="column" align="center" mt={10} gap={6}>
            {articles.slice(0, 3).map((article) => (
              <ArticlePreview key={article.url} article={article} />
            ))}
            <Link href="/blog" fontSize="lg" mt={2}>
              Read more articles
            </Link>
          </Flex>
        </Box>
      </LayoutWrapper>
      <Divider />
      <LayoutWrapper>
        <NewsletterForm />
      </LayoutWrapper>
    </>
  );
}
