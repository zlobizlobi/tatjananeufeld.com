import React from 'react';
import { Layout, Partnership } from '@components';
import { Heading, Container } from './styles';
import styled from 'styled-components';

import { useStaticQuery, graphql } from 'gatsby';

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 150px;
`;

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
            <PageContainer>
                <Heading>Repertoir/Partnerships</Heading>
                <Container>
                    {partnerships.map(p => (
                        <Partnership {...p} />
                    ))}
                </Container>
            </PageContainer>
        </Layout>
    );
};

export default RepertoirPartners;
