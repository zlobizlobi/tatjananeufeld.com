import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import image from '../../images/metaImage.jpg';

export const SEO = ({
    description,
    author,
    title,
    meta = []
}) => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        author
                        description
                        title
                    }
                }
            }
        `
    );

    const {
        siteMetadata
    } = site;

    const metaDescription = description || siteMetadata.description

    return (
        <Helmet
            title={title}
            titleTemplate={`%s | ${siteMetadata.title}`}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: author,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
                {
                    name: `image`,
                    content: image,
                },
                {
                    name: `og:image`,
                    content: image,
                },
            ].concat(meta)}
        />
    );
};
