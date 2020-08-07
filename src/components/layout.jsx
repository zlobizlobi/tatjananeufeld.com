import React from 'react';
import { MobileNavigation, DesktopNavigation } from './Navigation';
import styled from 'styled-components';
import { IntlProvider } from 'react-intl';
import { PageContextProvider } from './PageContext';

export default ({ children, pageContext, pathContext }) => {
    const { language, messages, defaultLocale } = pageContext.intl;
    return (
        <PageContextProvider pathContext={pathContext}>
            <IntlProvider
                locale={language}
                messages={messages}
                defaultLocale={defaultLocale}
            >
                <AppContainer>
                    <MobileNavigation />
                    <DesktopNavigation />
                    <Main>{children}</Main>
                </AppContainer>
            </IntlProvider>
        </PageContextProvider>
    );
};

const AppContainer = styled.div`
    display: flex;
    min-height: 100vh;
    flex-direction: column;
`;

const Main = styled.main`
    flex-grow: 1;
`;
