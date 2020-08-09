import styled from 'styled-components';

export const HeaderFixed = styled.header`
    background-color:${({ theme }) => theme.dark};
    position:fixed;
    width:100%;
    height:76px;
    top:0;
    left:0;
    box-shadow:0px 5px 4px -2px rgba(77,77,77,.34);
`

export const Menu = styled.nav`
    position:relative;
    width:100%;
    height:100%;
    max-width:1024px;
    margin:0 auto;
    ul {
        position:relative;
        width:100%;
        height:100%;
        display:flex;
        align-items:center;
        justify-content:flex-end;
        li {
            height:100%;
            background:red;
            padding:10px 40px;
            display:flex;
            justify-content:center;
            align-items:center;
        }
    }
`