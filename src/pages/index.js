import React from 'react';
import { Layout, SEO } from '@components';
import { useIntl } from 'react-intl';
import * as Scroll from 'react-scroll';

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
            <SEO
                title="Home"
                description='Tatjana Neufeld won various prizes at an early age at various international competitions, including the Piano Open 1996 in Hamburg and the international Grotrian-Steinweg 1997 in Braunschweig. She received piano lessons from Prof. Elena Lapitzkaja and graduated with honors from The Berlin University of The Arts in 2007. In 2011, Tatjana Neufeld received an additional degree from Prof. G. Franke, Prof. dr. H. Braunlich and Prof. P. Moll at the international Mendelssohn Academy Leipzig. Neufeld has performed with various orchestras in Germany, including the NDR Symphony Orchestra Hamburg. She has worked in concert series with, among others, the Berliner Philharmoniker, the Bach festival in Tverj (Russia) and Chamber Music Evening at the Mirabelle Palace "Salzburger Osterfestspiele'
                lang={locale}
                meta="Not much piano artists can claim that they have did this and that and whatever."
            />
            <LandingSection />
            <ConcertSection />
            <BiographySection />
            <GallerySection />
            <ContactSection />
        </Layout>
    );
};

export default IndexPage;
