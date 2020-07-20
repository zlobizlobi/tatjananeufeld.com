import React from 'react';
import Layout from './src/components/layout';
import { GlobalStyle } from './src/styles/globalStyle';

const LayoutRenderer = ({ PageComponent, pageProps }) =>
    <Layout {...pageProps}>
        <PageComponent {...pageProps} />
    </Layout>

export const replaceComponentRenderer = ({ props: { pageResources, ...pageProps } }) =>
    <LayoutRenderer PageComponent={pageResources.component} pageProps={pageProps} />

export const wrapRootElement = ({ element }) => (
    <GlobalStyle>
        {element}
    </GlobalStyle>
)
