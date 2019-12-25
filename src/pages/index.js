import React from "react"
import { Layout } from "components"
import { LandingSection } from "sections"
import { ConcertSection } from "../sections/concertSection/concertSection"

const IndexPage = () => {
  return (
    <Layout>
      <LandingSection />
      <ConcertSection />
    </Layout>
  )
}

export default IndexPage
