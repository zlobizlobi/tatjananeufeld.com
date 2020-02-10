import React from 'react';
import { GlobalStyle, media } from '@styles';
import { MobileNavigation, DesktopNavigation } from '../navigation';
import { Footer } from '../footer';
import styled from 'styled-components';

const AppContainer = styled.div`
    height: 100%;
    position: relative;
`

const Main = styled.main`
    display: flex;
    flex-direction: column;
    padding-bottom: 520px;

    ${media.md(`
        padding-bottom: 300px;
    `)}
`
export const Layout = ({ children }) => {
    return (
        <AppContainer>
            <GlobalStyle />
            <MobileNavigation />
            <DesktopNavigation />
            <Main>
                {children}
            </Main>
            <Footer />
        </AppContainer>
    );
};
