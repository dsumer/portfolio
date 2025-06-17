import { format, parseISO } from 'date-fns';
import { Box } from 'styled-system/jsx';

interface Props {
  date: string;
}

export const BlogMetaInfo = ({ date }: Props) => {
  return (
    <Box mb={2} fontSize="1.2em" color={{ base: 'gray.500', _dark: 'gray.400' }}>
      <time>{format(parseISO(date), 'LLLL d, yyyy')}</time>
    </Box>
  );
};
