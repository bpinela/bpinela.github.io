import {
  BiMoonIcon,
  BiSunIcon,
  Container,
  Logo,
  MenuItem,
  MenuList
} from './Header.styles';

export interface IHeader extends React.ComponentPropsWithoutRef<'div'> {
  theme: any;
  toggleTheme: () => void;
}

const Header: React.FC<IHeader> = ({ theme, toggleTheme }) => {
  return (
    <Container>
      <Logo href="/" title="Bruno Pinela">
        Bruno Pinela
      </Logo>
      <MenuList>
        <MenuItem href="/about" title="About">
          About
        </MenuItem>
        {theme?.body === '#b2bec3' ? (
          <BiSunIcon size={24} onClick={toggleTheme} />
        ) : (
          <BiMoonIcon size={24} onClick={toggleTheme} />
        )}
      </MenuList>
    </Container>
  );
};

export default Header;
