import React from 'react';
import {
    Section,
    Heading,
    SubContainer,
    Contact,
    FormHeading,
    ContactType,
    FormContainer
} from './styles';
import { ContactForm as Form } from '@components';
import { FormattedMessage } from 'gatsby-plugin-intl';
import aljosjaImage from '../../images/aljosja.svg'

export const ContactSection = () => (
    <Section name="contact">
        <Heading>
            <FormattedMessage id="contact_heading" />
        </Heading>
        <SubContainer>
            <Contact><a href="tel:+3165762 0017">+31 (6) 5762 0017</a><ContactType>nl</ContactType></Contact>
            <Contact><a href="tel:+491762438 5653">+49 (176) 2438 5653</a><ContactType>de</ContactType></Contact>
            <Contact>tatjananeufeld2020@gmail.com <ContactType>e-mail</ContactType></Contact>
            <Contact><a href="https://aljosja.art/tatjana-neufeld">aljosha.art/tatjana-neufeld</a><ContactType>agent <img src={aljosjaImage} alt="Aljosja logo" /></ContactType></Contact>
        </SubContainer>
        <FormHeading>
            <FormattedMessage id="contact_cta" />
        </FormHeading>
        <FormContainer>
            <Form />
        </FormContainer>
    </Section>
);
