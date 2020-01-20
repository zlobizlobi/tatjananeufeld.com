const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Tatjana Neufeld`,
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
    `gatsby-plugin-remove-trailing-slashes`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
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
        // option to redirect to `/ko` when connecting `/`
        redirect: true,
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        "@components": path.join(__dirname, "./src/components"),
        "@sections": path.join(__dirname, "./src/sections"),
        "@styles": path.join(__dirname, "./src/styles"),
      },
    },
  ],
}
