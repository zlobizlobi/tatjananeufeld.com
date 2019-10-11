/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"


interface IProps {
  children: React.ReactNode
}

const Layout: React.FC<IProps> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  console.log(data)

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <div>
        <nav></nav>
        <main>{children}</main>
        <footer>
        </footer>
      </div>
    </>
  )
}


export default Layout
