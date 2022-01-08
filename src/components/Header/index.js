import React from 'react';

import Logo from '../../images/logo.png';

import { Wrapper, Content, LogoImg, Navigation } from './Header.styles';

const Header = () => (
    <Wrapper>
        <Content>
            <LogoImg src={Logo} alt='logo' />
            <Navigation>
                <ul>
                    <li>Catalog</li>
                    <li>About</li>
                </ul>
            </Navigation>
        </Content>
    </Wrapper>
);

export default Header;
