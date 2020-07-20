import React from 'react';
import { MobileNavigation, DesktopNavigation } from './navigation';
import { Footer } from './footer';
import { GlobalStyle } from '../styles';
import styled from 'styled-components';
import { IntlProvider } from 'react-intl';

export default ({ children, pageContext }) => {
    const { language, messages, defaultLocale } = pageContext.intl;
    return (
        <IntlProvider locale={language} messages={messages} defaultLocale={defaultLocale}>
            <AppContainer>
                <GlobalStyle />
                <MobileNavigation />
                <DesktopNavigation />
                <Main>{children}</Main>
                <Footer />
            </AppContainer >
        </IntlProvider>
    )
}

const AppContainer = styled.div`
    display: flex;
    min-height: 100vh;
    flex-direction: column;
`;

const Main = styled.main`
    flex-grow: 1;
`;
