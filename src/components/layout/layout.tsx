/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { GlobalStyle } from "../../styles"
import { HamburgerMenu } from "../hamburgerMenu"
import { Nav } from "./components"

interface IProps {
  children: React.ReactNode
}



export const Layout: React.FC<IProps> = ({ children }) => {

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


