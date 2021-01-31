import React from 'react';
import { GlobalStyle } from './src/styles/globalStyle';
import { PageContextProvider, ModalProvider } from './src/components';

export const wrapRootElement = ({ element }) => (
    <ModalProvider>
        <GlobalStyle />
        {element}
    </ModalProvider>
);

export const wrapPageElement = ({ element, props }) => (
    <PageContextProvider context={props.pageContext}>
        {element}
    </PageContextProvider>
);
