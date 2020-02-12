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
import { ContactForm as Form } from '@components'
import { FormattedMessage } from 'react-intl';

export const ContactSection = () => {
    return (
        <Section name="contact">
            <Heading>
                <FormattedMessage id="contact_heading" />
            </Heading>
            <SubContainer>
                <Number>+31 (6) 29840232</Number>
                <Email>info@tatjananeufeld.com</Email>
            </SubContainer>
            <a href="tel:+31657316244">
                <PhoneIcon />
            </a>
            <FormHeading>
                <FormattedMessage id="contact_cta" />
            </FormHeading>
            <Form />
        </Section>
    )
}
