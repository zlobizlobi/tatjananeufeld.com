import React from 'react';
import { Partnership, Section, SEO, Footer, Heading as HeadingComponent } from '@components';
import { media } from '@styles';
import styled from 'styled-components';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';
import { useStaticQuery, graphql } from 'gatsby';

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

    const { formatMessage } = useIntl();

    const seoDescription = formatMessage({ id: 'seoPartnershipsDescription' });

    return (
        <>
            <SEO
                title="partnerships"
                description={seoDescription}
            />
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
        margin: 0;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 50px;

    ${media.lg(`
        flex-direction: row;
    `)}
`;
