import React from "react"
import { GlobalStyle } from "../../styles"
import { MobileNavigation, DesktopNavigation  } from "../navigation"
import { Footer } from "../footer"
import styled from 'styled-components'
import { media } from '../../styles'

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
      <MobileNavigation />
      {/* <DesktopMenu /> */}
      {/* <DesktopNavigation /> */}
      <main>{children}</main>
      <Footer/>
    </>
  )
}
