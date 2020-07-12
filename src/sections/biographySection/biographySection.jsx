import React from 'react';
import { Heading } from '@components';
import { FormattedMessage } from 'react-intl';
import { Text, Section, FirstImage, ContentContainer } from './styles';
import { useStaticQuery, graphql } from 'gatsby';

export const BiographySection = () => {
    const data = useStaticQuery(graphql`
        query MyQuery {
            prismicBiography {
                data {
                    first_image {
                        localFile {
                            childImageSharp {
                                fluid(quality: 100) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    first_paragraph
                }
            }
        }
    `);

    const {
        prismicBiography: {
            data: {
                first_image: {
                    localFile: {
                        childImageSharp: { fluid: firstImageFluid },
                    },
                },
                first_paragraph,
            },
        },
    } = data;

    return (
        <Section id="biography">
            <Heading>
                <FormattedMessage id="biography_heading" />
            </Heading>
            <ContentContainer>
                <FirstImage loading="lazy" fluid={firstImageFluid} />
                <Text>{first_paragraph}</Text>
            </ContentContainer>
        </Section>
    );
};
