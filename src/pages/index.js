import React from 'react';
import { Layout, SEO } from '@components';
import { useIntl } from 'react-intl';

import {
    LandingSection,
    ConcertSection,
    BiographySection,
    GallerySection,
    ContactSection,
} from '../sections';

const IndexPage = () => {
    const { locale } = useIntl();
    return (
        <Layout>
            <SEO title="Home" description="" lang={locale} meta="" />
            <LandingSection />
            <ConcertSection />
            <BiographySection />
            <GallerySection />
            <ContactSection />
        </Layout>
    );
};

export default IndexPage;
