import Link from 'next/link';
import { BiMoon, BiSun } from 'react-icons/bi';
import styled from 'styled-components';

export const Container = styled.header`
  align-items: center;
  background: ${props => props.theme.primary};
  color: #fff;
  display: flex;
  height: 60px;
  justify-content: space-between;
  padding: 0 30px;
`;

export const Logo = styled(Link)`
  color: ${props => props.theme.text};
  font-size: 24px;
  font-weight: 700;
`;

export const MenuList = styled.ul`
  align-items: end;
  display: flex;
`;

export const MenuItem = styled(Link)`
  color: ${props => props.theme.text};
  cursor: pointer;
  font-size: 16px;
  padding: 0 16px;

  &:hover {
    color: #f3f3f3;
  }
`;

export const BiSunIcon = styled(BiSun)`
  cursor: pointer;
  fill: ${props => props.theme.text};
`;

export const BiMoonIcon = styled(BiMoon)`
  cursor: pointer;
  fill: ${props => props.theme.text};
`;
