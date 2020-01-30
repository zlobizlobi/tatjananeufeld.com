import React from 'react'
import {
    Section,
    Heading,
    SubContainer,
    Number,
    Email,
    PhoneIcon,
    FormHeading,
} from './styles'

export const ContactSection = () => {
    return (
        <Section name="contact">
            <Heading>Contact</Heading>
            <SubContainer>
                <Number>+31 (6) 29840232</Number>
                <Email>info@tatjananeufeld.com</Email>
            </SubContainer>
            <a href="tel:+31657316244">
                <PhoneIcon />
            </a>
            <FormHeading>
                Or fill out this form, I'll quickly get back to you
            </FormHeading>
        </Section>
    )
}
