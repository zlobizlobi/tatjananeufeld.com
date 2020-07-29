import React from 'react';
import { Section as SectionComponent, Heading as HeadingComponent } from '@components';
import { FormattedMessage } from 'react-intl';
import { useStaticQuery, graphql } from 'gatsby';
import { FiDownload } from 'react-icons/fi';
import styled from 'styled-components';
import { media } from '@styles';
import Img from 'gatsby-image';

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

const Section = styled(SectionComponent)`
    background-color: white;
    color: black;
`;

const Text = styled.p`
    font-size: 14px;
    line-height: 24.5px;
    max-width: 650px;
    white-space: break-spaces;
    margin-top: 20px;

    ${media.md(`
        margin: 0;
    `)}
`;

const Image = styled(Img).attrs({
    imgStyle: {
        objectFit: 'cover',
        objectPosition: '0 20%'
    },
})`
    border-radius: 1px;
    width: 200px;
    height: 150px;

    ${media.sm(`
        margin: 7.5px 12.5px 4px 0;
        float: left;
        width: 200px;
        height: auto;
    `)}
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${media.md(`
        display: inline-block;
        margin: 0;
    `)}
`;

const ButtonContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 20px;
`

const Button = styled.a`
    padding: 5px 10px;
    border: 1px solid black;
    border-radius: 1px;
    color: black;
    font-size: 14px;

    text-decoration: none;
    display: flex;
    align-items: center;
    transition: all 0.3s ease;
    
    :hover {
        background-color: black;
        color: white;
    }
    
    ${media.sm(`    
        font-size: 16px;
        padding: 10px 20px;
    `)}
`
const Heading = styled(HeadingComponent)`
    color: black;
`
