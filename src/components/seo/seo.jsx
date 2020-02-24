import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

export const SEO = ({
    description,
    keywords,
    title,
    meta = [],
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
            metaTitle,
            metaDescription,
            metaKeywords,
            metaOgTitlte,
            metaOgDescription,
        },
    } = site;

    const seoKeywords = (keywords || metaKeywords).join(',');

    return (
        <Helmet
            title={`Tatjana Neufeld | ${title || metaTitle}`}
            meta={[
                {
                    name: `keywords`,
                    content: seoKeywords,
                },
                {
                    name: `description`,
                    content: description || metaDescription,
                },
                {
                    property: `og:title`,
                    content: ogTitle || metaOgTitlte,
                },
                {
                    property: `og:description`,
                    content: ogDescription || metaOgDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
            ]}
        />
    );
};
