import { Box } from 'styled-system/jsx';
import { dateFormatter } from '../utils/date-formatter';

interface Props {
  date: string;
}

export const BlogMetaInfo = ({ date }: Props) => {
  const dateStr = dateFormatter.formatDate(new Date(date));

  return (
    <Box mt={2} fontSize="20px" color={{ base: 'gray.500', _dark: 'gray.400' }}>
      <time>{dateStr}</time>
    </Box>
  );
};
