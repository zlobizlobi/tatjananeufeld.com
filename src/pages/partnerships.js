import React from 'react';
import { Layout, Partnership } from '@components';
import { Heading, Container } from '../styles/pageStyles/partnerships';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import { useStaticQuery, graphql } from 'gatsby';
import { SEO } from '../components/seo/seo';

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 150px 0;
`;

const Partnerships = () => {
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
            <SEO
                title="Partnerships"
                description="Next to solo performance T.Neufeld also stars in partnerships with other concert performers.
                Frequent concerts with different concert performers. See for Partnerships"
                ogDescription="Next to solo performance T.Neufeld also stars in partnerships with other concert performers.
                Frequent concerts with different concert performers. See for Partnerships"
                ogTitle="Partnerships"
                keywords={[
                    'Tatjana Neufeld',
                    'Tatjana Neufeld Partners',
                    'Tatjana Neufeld Program',
                    'Tatjana Neufeld Partnerships',
                ]}
            />
            <PageContainer>
                <Heading>
                    <FormattedMessage id="partnerships_heading" />
                </Heading>
                <Container>
                    {partnerships.map(p => (
                        <Partnership {...p} />
                    ))}
                </Container>
            </PageContainer>
        </Layout>
    );
};

export default Partnerships;
