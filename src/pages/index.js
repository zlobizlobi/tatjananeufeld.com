import React from "react"
import { Layout } from "@components"
import { LandingSection, ConcertSection, BiographySection, GallerySection} from "@sections"

const IndexPage = () => {
  return (
    <Layout>
      <LandingSection />
      <ConcertSection />
      <BiographySection />
      <GallerySection/>
    </Layout>
  )
}

export default IndexPage
