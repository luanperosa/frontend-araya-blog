import { createGlobalStyle } from 'styled-components';
// eslint-disable-next-line import/named
export { darkTheme, lightTheme } from './theme';
export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
  ul {
    list-style:none;
  }
  a {
     text-decoration:none;
  }
  h1,h2,h3,h4,h5,h6,span,p,a,div,li {
    color:${({ theme }) => theme.text};
    &.primary {
      color:${({ theme }) => theme.primary}
    }
    &.secundary {
      color:${({ theme }) => theme.secundary}
    }
    &.dark {
      color:${({ theme }) => theme.dark}
    }
    &.light {
      color:${({ theme }) => theme.light}
    }
  }
  .bg-color {
    color:${({ theme }) => theme.body};
    &.bg-primary {
      background-color:${({ theme }) => theme.primary}
    }
    &.bg-secundary {
      background-color:${({ theme }) => theme.secundary}
    }
    &.bg-dark {
      background-color:${({ theme }) => theme.dark}
    }
    &.bg-light {
      background-color:${({ theme }) => theme.light}
    }
  }
  .content {
    max-width:1024px;
    margin:0 auto;
  }
  .txt-center {
    text-align:center;
  }
`;
