import React from 'react';
import { Heading } from '@components';
import { FormattedMessage } from 'react-intl';
import { Text, Section, Image, ContentContainer } from './styles';
import { useStaticQuery, graphql } from 'gatsby';

export const BiographySection = () => {
    const data = useStaticQuery(graphql`
        query MyQuery {
            prismicBiography {
                data {
                    foto {
                        localFile {
                            childImageSharp {
                                fluid(quality: 100) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    text
                }
            }
        }
    `);

    const {
        prismicBiography: {
            data: {
                foto: {
                    localFile: {
                        childImageSharp: {
                            fluid
                        },
                    },
                },
                text,
            },
        },
    } = data;

    return (
        <Section id="biography">
            <Heading>
                <FormattedMessage id="biography_heading" />
            </Heading>
            <ContentContainer>
                <Image loading="lazy" fluid={fluid} />
                <Text>{text}</Text>
            </ContentContainer>
        </Section>
    );
};
