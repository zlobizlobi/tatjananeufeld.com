import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import { GlobalStyle } from "../../styles"
import { MobileMenu, DesktopMenu } from "../menu"
import styled from "styled-components"
import { DesktopMenuTwo } from "../desktopMenuTwo/desktopMenuTwo"

export const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <GlobalStyle />
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <MobileMenu />
      {/* <DesktopMenu /> */}
      <DesktopMenuTwo />
      <main>{children}</main>
    </>
  )
}
