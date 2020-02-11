import React from 'react';
import { Layout } from '@components';
import { useStaticQuery, graphql } from 'gatsby';
import { PortretImage, ContentWrapper, Text, LandingImage, CTAContainer } from '../styles/pageStyles/tatyana-podyomova/styles';

const TatyanaPodyomova = () => {

  const data = useStaticQuery(graphql`
    query TatyanaPodyomovaQuery {
        prismicTatyanaPodyomova {
          data {
            landing_image {
              localFile {
                childImageSharp {
                  fluid(quality: 100, traceSVG: { background: "black", threshold: 80 }){
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
              }
            }
            landing_text
            tatyana_image {
              localFile {
                childImageSharp {
                    fluid(quality: 100, traceSVG: {background: "black"}){
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
              }
            }
          }
        }
      }
    `)

  console.log(data);

  const { prismicTatyanaPodyomova: {
    data: {
      landing_image: {
        localFile: {
          childImageSharp: {
            fluid: landingImageSrc
          }
        }
      },
      landing_text,
      tatyana_image: {
        localFile: {
          childImageSharp: {
            fluid: tatyanaImageSrc
          }
        }
      },
    }
  } } = data

  return (
    <Layout>
      <ContentWrapper>
        <PortretImage fluid={tatyanaImageSrc} />
        <Text>{landing_text}</Text>
        <CTAContainer>
          <LandingImage fluid={landingImageSrc}></LandingImage>
        </CTAContainer>
      </ContentWrapper>
    </Layout>
  );
};

export default TatyanaPodyomova;
