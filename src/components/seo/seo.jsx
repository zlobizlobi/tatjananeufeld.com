import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import image from '../../images/metaImage.jpg';

export const SEO = ({
    description,
    keywords,
    title,
    ogTitle,
    ogDescription,
}) => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        metaTitle
                        metaDescription
                        metaAuthor
                        metaKeywords
                        metaOgDescription
                        metaOgTitle
                    }
                }
            }
        `
    );

    const {
        siteMetadata: {
            metaDescription,
            metaKeywords,
            metaOgTitle,
            metaOgDescription,
        },
    } = site;

    const seoKeywords = (keywords || metaKeywords).join(', ');

    return (
        <Helmet
            title={`Tatjana Neufeld${
                title ? ` | ${title}` : ': Official Website'
            }`}
        >
            <meta
                name="google-site-verification"
                content="hiS3QamKVs9x2E5-rxbLPU9AOi8Ix3WgQFoV1S8-Ncw"
            />
            <meta property="keywords" content={seoKeywords} />
            <meta
                property="description"
                content={description || metaDescription}
            />
            <meta property="image" content={image} />
            <meta property="og:title" content={ogTitle || metaOgTitle} />
            <meta
                property="og:description"
                content={ogDescription || metaOgDescription}
            />
            <meta property="og:image" content={image} />
        </Helmet>
    );
};
