const path = require('path');

module.exports = {
    siteMetadata: {
        title: 'Tatjana Neufeld',
        description: ``,
        author: `@zlobizlobi`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-styled-components`,
        `gatsby-transformer-json`,
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
                accessToken: `MC5YWi1mTGhFQUFDUUFBaTdS.77-9d--_ve-_vUbvv70K77-977-977-977-9YUx5BGLvv70iB--_ve-_ve-_vVjvv73vv70oCe-_vVkHRe-_vQ`,
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
                // language JSON resource path
                path: `${__dirname}/src/locales`,
                // supported language
                languages: [`en`, `de`, `ru`],
                // language file path
                defaultLanguage: `en`,
                redirect: true,
                // option to redirect to `/ko` when connecting `/`
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
