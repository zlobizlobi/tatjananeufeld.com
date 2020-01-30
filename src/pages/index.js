import React from 'react'
import { Layout } from '@components'
import {
    LandingSection,
    ConcertSection,
    BiographySection,
    GallerySection,
    ContactSection,
} from '@sections'

const IndexPage = () => {
    return (
        <Layout>
            <LandingSection />
            <ConcertSection />
            <BiographySection />
            <GallerySection />
            <ContactSection />
        </Layout>
    )
}

export default IndexPage
