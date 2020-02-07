import React from 'react';
import { Layout, Partnership } from '@components';
import { Heading, Container } from './styles';

import { useStaticQuery, graphql } from 'gatsby';

const RepertoirPartners = () => {
    const partnershipsData = useStaticQuery(graphql`
        query Partnerships {
            prismicPartnerships {
                data {
                    body {
                        primary {
                            partnership_name
                            partnership_story
                            partnership_image {
                                localFile {
                                    childImageSharp {
                                        fluid(quality: 100) {
                                            ...GatsbyImageSharpFluid
                                        }
                                    }
                                }
                            }
                        }
                        items {
                            partner_name
                            partner_image {
                                localFile {
                                    childImageSharp {
                                        fluid(quality: 100) {
                                            ...GatsbyImageSharpFluid
                                        }
                                    }
                                }
                            }
                            partner_biography
                        }
                    }
                }
            }
        }
    `);

    const {
        prismicPartnerships: {
            data: { body: partnerships },
        },
    } = partnershipsData;

    return (
        <Layout>
            <Container>
                <Heading>Partnerships</Heading>
                {partnerships.map(p => (
                    <Partnership {...p} />
                ))}
            </Container>
        </Layout>
    );
};

export default RepertoirPartners;
