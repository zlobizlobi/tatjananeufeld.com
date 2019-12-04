import React, { Suspense } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GlobalStyle } from "../../styles"
import { HamburgerMenu } from "../hamburgerMenu"
import { Nav } from "./components"

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
      <Nav>
        <HamburgerMenu />
      </Nav>
      <main>{children}</main>
    </React.Fragment>
  )
}


