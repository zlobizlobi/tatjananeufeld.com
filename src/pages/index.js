import React from 'react';
import { Layout, SEO } from '@components';

import {
    LandingSection,
    ConcertSection,
    BiographySection,
    GallerySection,
    ContactSection,
} from '../sections';

const IndexPage = () => {
    return (
        <Layout>
            <SEO />
            <LandingSection />
            <ConcertSection />
            <BiographySection />
            <GallerySection />
            <ContactSection />
        </Layout>
    );
};

export default IndexPage;
