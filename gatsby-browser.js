import React from 'react';
import Layout from './src/components/layout';
import { GlobalStyle } from './src/styles/globalStyle';

export const wrapPageElement = ({ element, props }) =>
    <Layout {...props}>
        {element}
    </Layout>

export const wrapRootElement = ({ element }) => (
    <>
        <GlobalStyle />
        {element}
    </>
)
