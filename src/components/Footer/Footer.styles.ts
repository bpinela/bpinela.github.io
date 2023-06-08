import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;
  line-height: 24px;
  font-size: 12px;
  color: ${props => props.theme.text};
  position: absolute;
  bottom: 16px;
  text-align: center;
  width: 100%;
`;

export const Content = styled.div`
  & a {
    color: inherit;
    border-bottom: 1px solid ${props => props.theme.text};
  }
`;
