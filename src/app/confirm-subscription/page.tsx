import { styled } from 'styled-system/jsx';
import { LayoutWrapper } from '../../components/layout-wrapper';

export default function Page() {
  return (
    <LayoutWrapper minH="100%" my={20} alignItems="center">
      <styled.h2 fontSize={['24px', '28px']} textAlign="center">
        Thanks for subscribing! 🎉
      </styled.h2>
    </LayoutWrapper>
  );
}
