'use client';

import { useEffect, useState } from 'react';
import { Box } from 'styled-system/jsx';

const ScrollProgressbar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const height = document.body.clientHeight - window.innerHeight;
      setProgress((window.scrollY / height) * 100);
    }
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Box pos="absolute" bottom={0 + 'px'} left="0" width="100%" height="3px" zIndex="10" opacity=".8">
      <Box
        style={
          {
            '--progress': progress + '%',
          } as React.CSSProperties
        }
        pos="absolute"
        left="0"
        top="0"
        height="100%"
        bg={{ base: 'blue.500', _dark: 'purple.800' }}
        width="var(--progress)"
      />
    </Box>
  );
};
export default ScrollProgressbar;
