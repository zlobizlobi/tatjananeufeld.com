import React from 'react';
import { Heading } from '@components';
import { FormattedMessage } from 'react-intl';
import { Text, Section, Image, Container, Button, ButtonContainer } from './styles';
import { useStaticQuery, graphql } from 'gatsby';
import { FiDownload } from 'react-icons/fi';

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
                    biography_file {
                        url
                    }
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
                biography_file: {
                    url: fileSrc
                }
            },
        },
    } = data;

    return (
        <Section id="biography">
            <Heading>
                <FormattedMessage id="biography_heading" />
            </Heading>
            <Container>
                <Image loading="lazy" fluid={fluid} />
                <Text>{text}</Text>
                <ButtonContainer>
                    <Button href={fileSrc} download="biography.pdf" target="_blank">
                        <FiDownload style={{ marginRight: '10px' }} />
                        Download
                    </Button>
                </ButtonContainer>
            </Container>
        </Section >
    );
};
