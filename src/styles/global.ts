import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  body: '#b2bec3',
  text: '#2d3436',
  toggleBorder: '#FFF',
  background: '#dfe6e9'
};

export const darkTheme = {
  body: '#363537',
  text: '#dadadb',
  toggleBorder: '#6B8096',
  background: '#1d1e20'
};

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.background};
    font-size: 14px;
    color: ${props => props.theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
  }

  a {
    text-decoration: none;
  }
`;
