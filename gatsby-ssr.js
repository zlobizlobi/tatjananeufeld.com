import React from 'react';
import Layout from './src/components/layout';

const LayoutRenderer = ({ PageComponent, pageProps }) =>
    <Layout {...pageProps}>
        <PageComponent {...pageProps} />
    </Layout>

export const replaceComponentRenderer = ({ props: { pageResources, ...pageProps } }) =>
    <LayoutRenderer PageComponent={pageResources.component} pageProps={pageProps} />
