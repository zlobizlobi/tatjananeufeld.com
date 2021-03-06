import React from 'react';
import { Seo, Footer, Section, Heading as HeadingComponent } from '@components';
import { useStaticQuery, graphql } from 'gatsby';
import { useIntl, FormattedMessage } from 'gatsby-plugin-intl';
import styled, { keyframes } from 'styled-components';
import Img from 'gatsby-image';
import { media } from '@styles';
import { FiArrowRight } from 'react-icons/fi';
import { useDetectKeyboard } from '../hooks/useDetectKeyboard';
import Layout from '../components/layout';

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
                                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
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
                                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
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

    useDetectKeyboard();

    const { formatMessage } = useIntl();

    const SeoDescription = formatMessage({ id: 'SeoPodyomovaDescription' });

    return (
        <Layout>
            <Seo title="tatyana-podyomova" description={SeoDescription} />
            <ContentWrapper>
                <Heading>
                    <FormattedMessage id="tatyana-podyomova" />
                </Heading>
                <PortretImage fluid={tatyanaImageSrc} />
                <Text>{landing_text}</Text>
                <CTAContainer href="#">
                    <LandingImage fluid={landingImageSrc} />
                    <Overlay>
                        <CTAText>
                            <FormattedMessage id="see_more_podyomova" />
                        </CTAText>
                        <Arrow />
                    </Overlay>
                </CTAContainer>
            </ContentWrapper>
            <Footer />
        </Layout>
    );
};

export default TatyanaPodyomova;

const ContentWrapper = styled(Section)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Heading = styled(HeadingComponent)`
    && {
        color: white;
        margin-top: 30px;
    }
`;

const imgStyle = {
    objectPosition: 'left',
    objectFit: 'contain',
};

const PortretImage = styled(Img).attrs({
    imgStyle: {
        ...imgStyle,
    },
})`
    width: 100%;
    height: auto;

    ${media.md(`
        width: 600px;
        height: 400px;
        margin: 50px 0 40px 0;
    `)}
`;

const LandingImage = styled(Img).attrs({
    imgStyle: {
        ...imgStyle,
    },
})`
    width: 100%;
    height: auto;
    transition: all 0.3s ease;

    ${media.md(`
        height: 250px;
    `)}
`;

const Text = styled.p`
    font-size: 14px;
    line-height: 30px;
    max-width: 600px;
    color: rgba(255, 255, 255, 0.5);
    padding: 0 20px;
    margin: 20px 0 10px 0;

    ${media.md(`
        padding: 0;
        margin: 0;
    `)}
`;

const arrowRight = keyframes`
    from {
      left: 0px;
    }
    to {
      right: 20px;
    }
`;

const Arrow = styled(FiArrowRight)`
    position: relative;
    left: -5px;
    color: white;
    width: 25px;
    height: 25px;
    margin-right: 30px;
    transition: all 0.1s ease;
    opacity: 0;
`;

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    left: 0;
    right: 0;
    bottom: 0;
    height: 50%;
    transition: all 0.2s ease;
`;

const CTAContainer = styled.a`
    position: relative;
    cursor: pointer;
    width: 100%;
    margin-top: 50px;

    &:hover {
        ${LandingImage} {
            transform: scale(1);
        }

        ${Arrow} {
            opacity: 1;
            animation: ${arrowRight} 0.25s infinite alternate;
        }
    }

    ${media.md(`
        width: 600px;
        height: 250px;
    `)}
`;

const CTAText = styled.span`
    font-size: 14px;
    color: white;
    margin-right: 10px;
    text-transform: uppercase;
    padding-bottom: 2.5px;
    border-bottom: 1px solid white;
`;
