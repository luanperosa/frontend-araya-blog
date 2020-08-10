import React, { useState, useEffect, Children } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import GlobalStyles, {
  darkTheme, lightTheme,
} from '../theme/Globalstyle';

export default function Layout({ children }) {
  const [theme, setTheme] = useState(darkTheme);
  // const themeToggler = () => {
  //   theme === 'light' ? setTheme('dark') : setTheme('light');
  // };
  return (
    <ThemeProvider theme={theme} >
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
