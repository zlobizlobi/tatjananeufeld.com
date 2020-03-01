import React from 'react';
import { Layout, SEO } from '@components';
import { formatLocale } from '../helpers';
import { graphql } from 'gatsby';

import {
    LandingSection,
    ConcertSection,
    BiographySection,
    GallerySection,
    ContactSection,
} from '../sections';

const IndexPage = ({ pageContext: { locale }, data }) => {
    // locale is not use as it's interpolated into the graphql query. This is graphql syntax.
    const {
        prismicMainPage: {
            data: { body: concerts },
        },
    } = data;

    return (
        <Layout>
            <SEO />
            <LandingSection />
            <ConcertSection concerts={concerts} />
            <BiographySection />
            <GallerySection />
            <ContactSection />
        </Layout>
    );
};

export default IndexPage;

export const data = graphql`
    query Concerts($locale: String!) {
        prismicMainPage(lang: { eq: $locale }) {
            data {
                body {
                    primary {
                        name
                        city
                        venue
                        hall
                        date
                        program
                        vendors
                        file {
                            url
                        }
                        poster {
                            localFile {
                                childImageSharp {
                                    fluid(quality: 100) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;
