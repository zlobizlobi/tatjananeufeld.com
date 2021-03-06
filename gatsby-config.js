const path = require('path');

module.exports = {
    siteMetadata: {
        siteUrl: 'https://www.tatjananeufeld.com',
        description:
            'Tatjana Neufeld is a leading and pioneering figure in classical music today. At a young age Neufeld won prizes at various international competitions, including the Piano Open 1996 in Hamburg and the international Grotrian-Steinweg 1997 in Braunschweig. She received piano lessons from Prof. Elena Lapitzkaja and graduated with honors from The Berlin University of The Arts in 2007. In 2011, Tatjana Neufeld received an additional degree from Prof. G. Franke, Prof. dr. H. Braunlich and Prof. P. Moll at the international Mendelssohn Academy Leipzig. Neufeld has performed with various orchestras in Germany, including the NDR Symphony Orchestra Hamburg. She has worked in concert series with, among others, the Berliner Philharmoniker, the Bach festival in Tverj (Russia) and Chamber Music Evening at the Mirabelle Palace Salzburger Osterfestspiele',
        title: 'Tatjana Neufeld',
        author: '@zlobizlobi',
        supportedLanguages: ['en', 'de', 'ru'],
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
                '@hooks': path.join(__dirname, './src/hooks'),
                '@components': path.join(__dirname, './src/components'),
                '@styles': path.join(__dirname, './src/styles'),
            },
        },
        {
            resolve: `gatsby-plugin-hotjar`,
            options: {
                id: 2222559,
                sv: 6,
            },
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [`Montserrat\:200, 400, 700, 900`],
                display: 'swap',
            },
        },
    ],
};
