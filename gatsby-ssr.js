import React from 'react';
import { GlobalStyle } from './src/styles/globalStyle';
import { PageContextProvider } from './src/components';

export const wrapRootElement = ({ element }) => (
    <>
        <GlobalStyle />
        {element}
    </>
);

export const wrapPageElement = ({ element, props }) => {
    return <PageContextProvider context={props.pageContext}>{element}</PageContextProvider>;
};
