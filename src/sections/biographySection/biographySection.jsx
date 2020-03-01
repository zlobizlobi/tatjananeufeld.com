import React from 'react';
import { Heading } from '@components';
import { FormattedMessage } from 'react-intl';
import {
    Text,
    Section,
    FirstImage,
    ContentContainer,
    SecondImage,
} from './styles';
import { useStaticQuery, graphql } from 'gatsby';

export const BiographySection = () => {
    const data = useStaticQuery(graphql`
        query MyQuery {
            prismicBiography {
                data {
                    first_paragraph {
                        text
                    }
                    second_paragraph {
                        text
                    }
                    first_image {
                        localFile {
                            childImageSharp {
                                fluid(quality: 100) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    second_image {
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
    `);

    const {
        prismicBiography: {
            data: {
                first_paragraph: { text: firstParagraphText },
                second_paragraph: { text: secondParagraphText },
                first_image: {
                    localFile: {
                        // query for the first image
                        childImageSharp: { fluid: firstImageFluid },
                    },
                },
                second_image: {
                    localFile: {
                        // query for the second image
                        childImageSharp: { fluid: secondImageFluid },
                    },
                },
            },
        },
    } = data;

    return (
        <Section name="biography">
            <Heading>
                <FormattedMessage id="biography_heading" />
            </Heading>
            <ContentContainer>
                <FirstImage loading="lazy" fluid={firstImageFluid} />
                <Text>{firstParagraphText}</Text>
                <SecondImage loading="lazy" fluid={secondImageFluid} />
                <Text>{secondParagraphText}</Text>
            </ContentContainer>
        </Section>
    );
};
