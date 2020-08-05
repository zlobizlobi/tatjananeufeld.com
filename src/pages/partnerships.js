import React from 'react';
import {
    Partnership,
    Section,
    SEO,
    Footer,
    Heading as HeadingComponent,
} from '@components';
import styled from 'styled-components';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';
import { graphql } from 'gatsby';


export const data = graphql`
    query Partnerships($locale: String!) {
        allPrismicPartnerships(filter: { lang: { eq: $locale } }) {
            nodes {
                data {
                    announcement
                    biography
                    biography_file {
                        url
                    }
                    name
                    image {
                        localFile {
                            childImageSharp {
                                fluid(quality: 100){
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    body {
            ...on PrismicPartnershipsBodyArtist {
                            id
                            slice_type
                            primary {
                                artist_biography
                                artist_name
                                instrument
                                artist_biography_file {
                                    url
                                }
                                artist_image {
                                    localFile {
                                        childImageSharp {
                                            fluid(quality: 100){
                                                aspectRatio
                                                src
                                                srcSet
                                                sizes
                                                originalName
                                            }
                                        }
                                    }
                                }
                            }
                        }
            ...on PrismicPartnershipsBodyProgram {
                            id
                            slice_type
                            items {
                                program
                            }
                            primary {
                                year
                                program_file {
                                    url
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;




const Partnerships = ({ pageContext: { locale }, data }) => {
    const { formatMessage } = useIntl();

    const partnerships = data.allPrismicPartnerships.nodes;

    const seoDescription = formatMessage({ id: 'seoPartnershipsDescription' });

    return (
        <>
            <SEO title="partnerships" description={seoDescription} />
            <Section>
                <Heading>
                    <FormattedMessage id="partnerships_heading" />
                </Heading>
                <Container>
                    {partnerships.map((p, index) => (
                        <Partnership {...p} key={index} />
                    ))}
                </Container>
            </Section>
            <Footer />
        </>
    );
};

export default Partnerships;

const Heading = styled(HeadingComponent)`
    && {
        color: white;
        margin-top: 30px;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 50px;
    width: 100%;
`;
