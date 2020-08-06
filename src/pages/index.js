import React, { useRef } from 'react';
import { Seo } from '@components';
import { graphql } from 'gatsby';
import {
    LandingSection,
    ConcertSection,
    BiographySection,
    ContactSection,
    GallerySection,
} from '../sections';
import { Footer } from '@components';
import { useDetectKeyboard } from '../hooks';

export const data = graphql`
    query Concerts($locale: String!) {
        prismicMainPage(lang: { eq: $locale }) {
            data {
                body {
                    primary {
                        name
                        city
                        venue
                        address
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

const IndexPage = ({ pageContext: { locale }, data }) => {
    // locale is not highlighted as used here as it's interpolated under the hood into the graphql query. This is graphql syntax.
    useDetectKeyboard();

    const {
        prismicMainPage: {
            data: { body: concerts },
        },
    } = data;

    const concertRef = useRef(null);


    return (
        <>
            <Seo title="home" />
            <LandingSection ref={concertRef} />
            <ConcertSection ref={concertRef} concerts={concerts} />
            <BiographySection />
            <GallerySection />
            <ContactSection />
            <Footer />
        </>
    );
};

export default IndexPage;
