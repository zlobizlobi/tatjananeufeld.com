import React from 'react';
import { MobileNavigation, DesktopNavigation } from '../navigation';
import { Footer } from '../footer';
import { Main, AppContainer } from './styles';
import { GlobalStyle } from '../../styles';

const Layout = ({ children }) =>
    <AppContainer>
        <GlobalStyle />
        <header>
            <MobileNavigation />
            <DesktopNavigation />
        </header>
        <Main>{children}</Main>
        <Footer />
    </AppContainer>

export default Layout
