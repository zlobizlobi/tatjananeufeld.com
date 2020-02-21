import React from 'react';
import { Layout } from '@components';
import { useStaticQuery, graphql } from 'gatsby';
import { FormattedMessage } from 'react-intl';

import {
    PortretImage,
    ContentWrapper,
    Text,
    LandingImage,
    CTAContainer,
    Overlay,
    Arrow,
    CTAText,
} from '../styles/pageStyles/tatyana-podyomova/styles';

const TatyanaPodyomova = () => {
    const data = useStaticQuery(graphql`
        query TatyanaPodyomovaQuery {
            prismicTatyanaPodyomova {
                data {
                    landing_image {
                        localFile {
                            childImageSharp {
                                fluid(
                                    quality: 100
                                    traceSVG: {
                                        background: "black"
                                        threshold: 80
                                    }
                                ) {
                                    ...GatsbyImageSharpFluid_tracedSVG
                                }
                            }
                        }
                    }
                    landing_text
                    tatyana_image {
                        localFile {
                            childImageSharp {
                                fluid(
                                    quality: 100
                                    traceSVG: { background: "black" }
                                ) {
                                    ...GatsbyImageSharpFluid_tracedSVG
                                }
                            }
                        }
                    }
                }
            }
        }
    `);

    const {
        prismicTatyanaPodyomova: {
            data: {
                landing_image: {
                    localFile: {
                        childImageSharp: { fluid: landingImageSrc },
                    },
                },
                landing_text,
                tatyana_image: {
                    localFile: {
                        childImageSharp: { fluid: tatyanaImageSrc },
                    },
                },
            },
        },
    } = data;

    return (
        <Layout>
            <SEO
                title="T. Podyomova"
                meta=""
                description="Next to solo performance T.Neufeld is also involved in didactic practices and thus gives piano lessons to children."
            />
            <ContentWrapper>
                <PortretImage fluid={tatyanaImageSrc} />
                <Text>{landing_text}</Text>
                <CTAContainer href="#">
                    <LandingImage fluid={landingImageSrc}></LandingImage>
                    <Overlay>
                        <CTAText>
                            <FormattedMessage id="see_more_podyomova" />
                        </CTAText>
                        <Arrow />
                    </Overlay>
                </CTAContainer>
            </ContentWrapper>
        </Layout>
    );
};

export default TatyanaPodyomova;
