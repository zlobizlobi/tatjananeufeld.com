import React from 'react';
import { GlobalStyle } from '@styles';
import { MobileNavigation, DesktopNavigation } from '../navigation';
import { Footer } from '../footer';
import { Main, AppContainer } from './styles';

export const Layout = ({ children }) => {
    return (
        <AppContainer>
            <GlobalStyle />
            <MobileNavigation />
            <DesktopNavigation />
            <Main>{children}</Main>
            <Footer />
        </AppContainer>
    );
};
