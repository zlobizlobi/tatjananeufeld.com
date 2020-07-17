import React from 'react';
import { MobileNavigation, DesktopNavigation } from '../navigation';
import { Footer } from '../footer';
import { Main, AppContainer } from './styles';
import { GlobalStyle } from '../../styles';
import { IntlProvider } from 'react-intl';

const Layout = (props) => {
    const intl = props.pageContext.intl
    return (
        <IntlProvider
            locale={intl.language}
            defaultLocale={intl.defaultLocale}
            messages={intl.messages}
        >
            <AppContainer>
                <GlobalStyle />
                <MobileNavigation />
                <DesktopNavigation />
                <Main>{props.children}</Main>
                <Footer />
            </AppContainer>
        </IntlProvider>
    )
}

export default Layout
