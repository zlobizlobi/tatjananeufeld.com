import React, { Suspense } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GlobalStyle } from "../../styles"
import { MobileMenu, DesktopMenu } from "./menu"

export const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <React.Fragment>
      <GlobalStyle />
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <MobileMenu />
      <DesktopMenu />
      <main>{children}</main>
    </React.Fragment>
  )
}


