/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import { GlobalStyle } from "../../styles"

interface IProps {
  children: React.ReactNode
}



const Nav = styled.nav`

`

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
      <div>
        <nav></nav>
        <main>{children}</main>
        <footer>
        </footer>
      </div>
    </React.Fragment>
  )
}


