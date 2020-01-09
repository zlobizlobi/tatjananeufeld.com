import React from "react"
import { GlobalStyle } from "../../styles"
import { MobileMenu, DesktopMenu } from "../menu"

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
      <DesktopMenu />
      <main>{children}</main>
    </>
  )
}
