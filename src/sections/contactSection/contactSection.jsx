import React from 'react';
import {
    Heading,
    SubContainer,
    ContactOption,
    FormHeading,
    FormContainer,
    LogoContainer
} from './styles';
import { ContactForm as Form, Section } from '@components';
import { FormattedMessage } from 'gatsby-plugin-intl';
import aljosjaImage from '../../images/aljosja.svg';

export const ContactSection = () => (
    <Section id="contact">
        <Heading>
            <FormattedMessage id="contact_heading" />
        </Heading>
        <SubContainer>
            <ContactOption>
                <a href="tel:+3165762 0017">+31 (6) 5762 0017</a>
            </ContactOption>
            <ContactOption>
                <a href="tel:+491762438 5653">+49 (176) 2438 5653</a>
            </ContactOption>
            <ContactOption>
                <a href="mailto:tatjananeufeld2020@gmail.com">
                    tatjananeufeld2020@gmail.com
                </a>
            </ContactOption>
            <LogoContainer href="https://aljosja.art">
                <img src={aljosjaImage} alt="Aljosja logo" />
            </LogoContainer>
            <ContactOption>
                <a href="https://aljosja.art">Agent Aljosja Art</a>
            </ContactOption>
        </SubContainer>
        <FormHeading>
            <FormattedMessage id="contact_cta" />...
        </FormHeading>
        <FormContainer>
            <Form />
        </FormContainer>
    </Section>
);
