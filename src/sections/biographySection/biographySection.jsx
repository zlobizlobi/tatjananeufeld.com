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
                    second_image {
                        localFile {
                            childImageSharp {
                                fluid(quality: 100) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    second_paragraph
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
                second_image: {
                    localFile: {
                        childImageSharp: { fluid: secondImageFluid },
                    },
                },
                second_paragraph,
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
                <Text>{first_paragraph}</Text>
                <SecondImage loading="lazy" fluid={secondImageFluid} />
                <Text>{second_paragraph}</Text>
            </ContentContainer>
        </Section>
    );
};
