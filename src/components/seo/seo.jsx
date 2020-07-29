import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import image from '../../images/metaImage.jpg';
import { useIntl } from 'react-intl';
import { usePageContext } from '../PageContext';

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
                        supportedLanguages
                        siteUrl
                    }
                }
            }
        `
    );

    const {
        siteMetadata
    } = site;

    const { locale: lang, formatMessage } = useIntl();

    const metaDescription = description || formatMessage({ id: 'seoHomeDescription' });

    const host = siteMetadata.siteUrl;

    const { originalPath } = usePageContext();

    const seoTitle = formatMessage({ id: title });

    return (
        <Helmet
            htmlAttributes={{
                lang
            }}
            title={title}
            titleTemplate={`${siteMetadata.title} | ${seoTitle}`}
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
            link={[
                {
                    rel: 'canonical',
                    href: `${host}/${lang}${originalPath}`,
                },
                {
                    rel: 'alternate',
                    hrefLang: 'x-default',
                    href: `${host}${originalPath}`,
                },
                ...site.siteMetadata.supportedLanguages.map(supportedLang => ({
                    rel: 'alternate',
                    hrefLang: supportedLang,
                    href: `${host}${originalPath}`,
                })),
            ]}
        />
    );
};
