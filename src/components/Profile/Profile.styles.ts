import Image from 'next/image';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 100px);
`;

export const Content = styled.div`
  text-align: center;

  & h1 {
    padding: 16px 0;
  }
`;

export const Photo = styled(Image)`
  border-radius: 64px;
`;

export const SocialMedia = styled.div`
  padding: 16px 0;
  display: flex;
  justify-content: center;
  font-size: 24px;

  & a {
    color: inherit;
  }

  & svg {
    cursor: pointer;
    margin: 0 8px;
  }
`;
