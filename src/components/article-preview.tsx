import { Flex, Text, useColorModeValue } from '@chakra-ui/react';

interface Props {
  title: string;
  description: string;
  // TODO: add slug
}

export const ArticlePreview = ({ title, description }: Props) => {
  const bgColor = useColorModeValue('#f1f5f7', '#293745');

  return (
    <Flex direction="column" maxW="600px" w="100%" bg={bgColor} rounded="md" py={3} px={4}>
      <Text as="h3" fontSize="lg" fontWeight="semibold" mb={2}>
        {title}
      </Text>
      <Text fontSize="sm">{description}</Text>
    </Flex>
  );
};
