import React from "react"
import { Layout } from "@components"
import { LandingSection, ConcertSection } from "@sections"

const IndexPage = () => {
  return (
    <Layout>
      <LandingSection />
      <ConcertSection />
    </Layout>
  )
}

export default IndexPage
