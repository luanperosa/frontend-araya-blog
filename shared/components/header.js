import { HeaderFixed, Menu } from '../theme/header';

export default function Header() {
    return (
        <HeaderFixed>
            <Menu>
                <ul>
                    <li>Home</li>
                    <li>Blog</li>
                    <li>Portfólio</li>
                </ul>
            </Menu>
        </HeaderFixed>
    )
}