const path = require('path');

// require('dotenv').config({
//     path: `.env.${process.env.NODE_ENV}`,
// });

module.exports = {
    siteMetadata: {
        siteUrl: 'https://www.tatjananeufeld.com',
        metaDescription:
            'Tatjana Neufeld won various prizes at an early age at various international competitions, including the Piano Open 1996 in Hamburg and the international Grotrian-Steinweg 1997 in Braunschweig. She received piano lessons from Prof. Elena Lapitzkaja and graduated with honors from The Berlin University of The Arts in 2007. In 2011, Tatjana Neufeld received an additional degree from Prof. G. Franke, Prof. dr. H. Braunlich and Prof. P. Moll at the international Mendelssohn Academy Leipzig. Neufeld has performed with various orchestras in Germany, including the NDR Symphony Orchestra Hamburg. She has worked in concert series with, among others, the Berliner Philharmoniker, the Bach festival in Tverj (Russia) and Chamber Music Evening at the Mirabelle Palace "Salzburger Osterfestspiele',
        metaAuthor: `@zlobizlobi`,
        metaKeywords: [
            'Tatjana Neufeld',
            'Piano Concerts',
            'Neufeld',
            'Piano concerts Netherlands',
        ],
        metaOgDescription:
            'Tatjana Neufeld won various prizes at an early age at various international competitions, including the Piano Open 1996 in Hamburg and the international Grotrian-Steinweg 1997 in Braunschweig. She received piano lessons from Prof. Elena Lapitzkaja and graduated with honors from The Berlin University of The Arts in 2007. In 2011, Tatjana Neufeld received an additional degree from Prof. G. Franke, Prof. dr. H. Braunlich and Prof. P. Moll at the international Mendelssohn Academy Leipzig. Neufeld has performed with various orchestras in Germany, including the NDR Symphony Orchestra Hamburg. She has worked in concert series with, among others, the Berliner Philharmoniker, the Bach festival in Tverj (Russia) and Chamber Music Evening at the Mirabelle Palace "Salzburger Osterfestspiele',
        metaOgTitle: 'Tatjana Neufeld',
        author: 'David Zlobinskyy',
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-styled-components`,
        `gatsby-transformer-json`,
        `gatsby-plugin-sitemap`,
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: 'https://www.tatjananeufeld.com',
                sitemap: 'https://www.tatjananeufeld.com/sitemap.xml',
                policy: [
                    { userAgent: '*', allow: ['/', '/en/', '/de/', '/ru/'] },
                ],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-source-prismic`,
            options: {
                repositoryName: `tatjananeufeld`,
                accessToken: process.env.API_KEY,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'Tatjana Neufeld | Concert Pianist',
                short_name: 'Tatjana Neufeld',
                description:
                    'Tatjana Neufeld won various prizes at an early age at various international competitions, including the Piano Open 1996 in Hamburg and the international Grotrian-Steinweg 1997 in Braunschweig. She received piano lessons from Prof. Elena Lapitzkaja and graduated with honors from The Berlin University of The Arts in 2007. In 2011, Tatjana Neufeld received an additional degree from Prof. G. Franke, Prof. dr. H. Braunlich and Prof. P. Moll at the international Mendelssohn Academy Leipzig. Neufeld has performed with various orchestras in Germany, including the NDR Symphony Orchestra Hamburg. She has worked in concert series with, among others, the Berliner Philharmoniker, the Bach festival in Tverj (Russia) and Chamber Music Evening at the Mirabelle Palace "Salzburger Osterfestspiele',
                start_url: 'https://tatjananeufeld.com',
                background_color: '#000',
                theme_color: '#000',
                display: 'standalone',
                icon: 'src/images/favicon.png',
            },
        },
        {
            resolve: `gatsby-plugin-intl`,
            options: {
                path: `${__dirname}/src/locales`,
                languages: [`en`, `de`, `ru`],
                defaultLanguage: `en`,
                redirect: true,
            },
        },
        {
            resolve: 'gatsby-plugin-root-import',
            options: {
                '@components': path.join(__dirname, './src/components'),
                '@styles': path.join(__dirname, './src/styles'),
            },
        },
    ],
};
