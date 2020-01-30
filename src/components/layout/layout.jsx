import React from 'react'
import { GlobalStyle } from '@styles'
import { MobileNavigation, DesktopNavigation } from '../navigation'

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
            <DesktopNavigation />
            <main style={{ display: 'flex', flexDirection: 'column' }}>
                {children}
            </main>
            {/* <Footer /> */}
        </>
    )
}
