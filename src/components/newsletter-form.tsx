'use client';

import { ChangeEvent, useState } from 'react';
import toast from 'react-hot-toast';
import { FaCheck } from 'react-icons/fa';
import Balancer from 'react-wrap-balancer';
import { Box, Flex, styled } from 'styled-system/jsx';
import { Text } from './common/text';

type State = 'initial' | 'submitting' | 'success';

export const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<State>('initial');

  const onSubmit = async () => {
    if (state !== 'initial') {
      return;
    }

    let errorMessage = "It didn't work as expected. 😢 Please tell Dominik! 😄";
    const toastId = toast.loading('Submitting...');
    setState('submitting');

    try {
      const response = await (
        await fetch('https://api.convertkit.com/v3/forms/1930765/subscribe', {
          method: 'post',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            api_key: process.env.NEXT_PUBLIC_CONVERTKIT_API_KEY,
            email,
          }),
        })
      ).json();
      if (response.error) {
        errorMessage = response.message;
        throw {};
      }
      setState('success');
      toast.dismiss(toastId);
      toast.success("You'll soon receive a confirmation mail!");
    } catch {
      toast.dismiss(toastId);
      toast.error(errorMessage);
      setState('initial');
    }
  };

  return (
    <Flex justify="center" id="newsletter">
      <Box pos="relative">
        <Box
          display={['none', 'block']}
          position="absolute"
          width="250px"
          height="150px"
          background="linear-gradient(333deg, #ff00c9, #1a99ff)"
          border-radius="50%"
          top="15px"
          right="-25px"
          z-index="-1"
          filter="blur(50px)"
          opacity="0.3"
          animationName="bounce"
          animationDuration="10s"
          animationIterationCount="infinite"
        />
        <Box
          display={['none', 'block']}
          position="absolute"
          width="250px"
          height="150px"
          background="linear-gradient(333deg, #ff00c9, #1a99ff)"
          border-radius="50%"
          left="-15px"
          bottom="-35px"
          z-index="-1"
          filter="blur(50px)"
          opacity="0.3"
          animationName="bounce"
          animationDuration="7s"
          animationIterationCount="infinite"
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
          _before={{
            content: "' '",
            zIndex: -1,
            display: ['none', 'block'],
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
            display: ['none', 'block'],
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            background: 'inherit',
            borderRadius: 'inherit',
          }}
        >
          <Text fontSize={['2xl', '3xl']} fontWeight="semibold" mb={2}>
            <Balancer>I&apos;ve never sent a newsletter issue</Balancer>
          </Text>
          <Text fontSize={['xl', '2xl']} fontWeight="500" opacity={0.85} mb={8} mr={-1}>
            But you don&apos;t want to miss out when I do! 😬
          </Text>
          <styled.form
            display="flex"
            flexDirection={['column', 'column', 'row']}
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit();
            }}
            gap={3}
          >
            <styled.input
              color="gray.800"
              _placeholder={{
                color: 'gray.400',
              }}
              bg="white"
              rounded="md"
              p={2}
              id="email"
              type="email"
              required
              placeholder="Your Email Address"
              aria-label="Your Email Address"
              value={email}
              disabled={state !== 'initial'}
              flexGrow={1}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            />
            <styled.button
              bg={state === 'success' ? 'green.500' : 'blue.500'}
              color="white"
              fontWeight="medium"
              p={2}
              minW="90px"
              rounded="md"
              display="flex"
              cursor={state === 'initial' ? 'pointer' : 'not-allowed'}
              transition="transform .3s"
              _hover={{ transform: state === 'initial' ? 'translateY(-3px)' : undefined }}
              _active={{ transform: 'translateY(0)' }}
              alignItems="center"
              justifyContent="center"
              disabled={state !== 'initial'}
              type={state === 'success' ? 'button' : 'submit'}
            >
              {state === 'success' ? <FaCheck /> : 'Submit'}
            </styled.button>
          </styled.form>
        </Box>
      </Box>
    </Flex>
  );
};
