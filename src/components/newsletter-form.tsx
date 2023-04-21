import { Box, Button, Flex, FormControl, Input, LightMode, Text } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import { ChangeEvent, FormEvent } from 'react';
import { FaCheck } from 'react-icons/fa';
import Balancer from 'react-wrap-balancer';
import { newsletterFormStore } from '../stores/newsletter-form-store';

export const NewsletterForm = observer(() => {
  return (
    <Flex justify="center" id="newsletter">
      <Box pos="relative">
        <Box
          position="absolute"
          width="250px"
          height="150px"
          background="linear-gradient(333deg, #ff00c9, #1a99ff)"
          border-radius="50%"
          top="-15px"
          right="-25px"
          z-index="-1"
          filter="blur(50px)"
          opacity="0.3"
        />
        <Box
          position="absolute"
          width="250px"
          height="150px"
          background="linear-gradient(333deg, #ff00c9, #1a99ff)"
          border-radius="50%"
          left="-15px"
          bottom="-25px"
          z-index="-1"
          filter="blur(50px)"
          opacity="0.3"
        />
        <Box
          pos="relative"
          w="100%"
          maxW="700px"
          rounded="lg"
          textAlign="center"
          bg="linear-gradient(120deg, #f6d365 0%, #fda085 100%)"
          color="gray.900"
          py={10}
          px={[8, 8, 16]}
          border="1px solid"
          borderColor="chakra-body-bg"
          _before={{
            content: "' '",
            zIndex: -1,
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            background: 'linear-gradient(-45deg, #fff95b 0%, #ff930f 100% )',
            transform: 'translate3d(0px, 5px, 0) scale(0.95)',
            filter: 'blur(20px)',
            opacity: '0.4',
            borderRadius: 'inherit',
          }}
          _after={{
            content: "' '",
            zIndex: -1,
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            background: 'inherit',
            borderRadius: 'inherit',
          }}
        >
          <LightMode>
            <Text fontSize={['2xl', '3xl']} fontWeight="semibold" mb={2}>
              <Balancer>I&apos;ve never sent a newsletter issue</Balancer>
            </Text>
            <Text fontSize={['xl', '2xl']} fontWeight="500" opacity={0.85} mb={10} mr={-2}>
              But you don&apos;t want to miss out when I do! 😬
            </Text>
            <Flex
              direction={['column', 'column', 'row']}
              as="form"
              onSubmit={(e: FormEvent) => {
                e.preventDefault();
                newsletterFormStore.submit();
              }}
              gap={3}
            >
              <FormControl>
                <Input
                  variant="solid"
                  color="gray.800"
                  _placeholder={{
                    color: 'gray.400',
                  }}
                  bg="white"
                  id="email"
                  type="email"
                  required
                  placeholder="Your Email"
                  aria-label="Your Email"
                  value={newsletterFormStore.email}
                  disabled={newsletterFormStore.state !== 'initial'}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => newsletterFormStore.changeEmail(e.target.value)}
                />
              </FormControl>
              <FormControl w={['100%', '100%', '40%']}>
                <Button
                  colorScheme={newsletterFormStore.state === 'success' ? 'green' : 'blue'}
                  isLoading={newsletterFormStore.state === 'submitting'}
                  w="100%"
                  type={newsletterFormStore.state === 'success' ? 'button' : 'submit'}
                >
                  {newsletterFormStore.state === 'success' ? <FaCheck /> : 'Submit'}
                </Button>
              </FormControl>
            </Flex>
          </LightMode>
        </Box>
      </Box>
    </Flex>
  );
});
