import React from "react"
import { Layout } from "@components"
import { LandingSection, ConcertSection, BiographySection } from "@sections"

const IndexPage = () => {
  return (
    <Layout>
      <LandingSection />
      <ConcertSection />
      <BiographySection />
    </Layout>
  )
}

export default IndexPage
