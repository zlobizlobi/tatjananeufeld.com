import * as React from 'react'

import { useStaticQuery, graphql } from "gatsby"


export const ConcertSlice: React.FC = () => {
    const prismicData = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
    `)
    console.log(prismicData)
    return null
}