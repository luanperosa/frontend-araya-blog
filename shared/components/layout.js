import React, { useState, useEffect, Children } from "react";
import Head from 'next/head'
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../theme/Globalstyle";

const lightTheme = {
    body: '#FFF',
    text: '#363537',
    toggleBorder: '#FFF',
    background: '#363537',
}

const darkTheme = {
    body: '#1a1a18',
    dark: '#222',
    primary: '#5c2a83',
    secundary: '#49a938',
    text: '#FAFAFA',
    toggleBorder: '#4d4d4d',
    light: '#e6e6e6',
}

export default function Layout({ children }) {
    const [theme, setTheme] = useState(darkTheme);
    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    }
    return (
        <ThemeProvider theme={theme} >
            <GlobalStyles />
            {children}
        </ThemeProvider>
    )
}
