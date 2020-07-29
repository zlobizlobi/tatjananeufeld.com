import React from 'react';
import { SEO, Footer } from '@components';
import { useStaticQuery, graphql } from 'gatsby';
import { FormattedMessage, useIntl } from 'react-intl';

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

    const { formatMessage } = useIntl();

    const seoDescription = formatMessage({ id: 'seoPodyomovaDescription' });

    return (
        <>
            <SEO
                title="tatyana-podyomova"
                description={seoDescription}
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
            <Footer />
        </>
    );
};

export default TatyanaPodyomova;
