import React, { useState } from 'react';
import {
    FooterComponent,
    Name,
    NavList,
    NavLink,
    IconContainer,
    Youtube,
    Facebook,
    CopyRighText,
    PageLink
} from './styles';
import { FormattedMessage } from 'react-intl';

const navLinks = [
    'home',
    'concerts',
    'biography',
    'gallery',
    'partnerships',
    'tatyana-podyomova',
    'contact',
];

export const Footer = () => {
    const [isActive, setIsActive] = useState(['home']);
    return (
        <FooterComponent>
            <Name>Tatjana Neufeld</Name>
            <NavList>
                {navLinks.map(navLink => {
                    if (navLink === "repertoir-partners" || navLink === "tatyana-podyomova") {
                        return (
                            <PageLink to={`/${navLink}`}>
                                <FormattedMessage id={navLink} />
                            </PageLink>)
                    }
                    return (
                        <NavLink
                            onClick={() => setIsActive([navLink])}
                            key={navLink}
                            name={navLink}
                        >
                            <FormattedMessage id={navLink} />
                        </NavLink>)
                })}
            </NavList>
            <IconContainer>
                <a href="https://youtube.com">
                    <Youtube />
                </a>
                <a href="https://youtube.com">
                    <Facebook />
                </a>
            </IconContainer>
            <CopyRighText>
                © Copyright Tatjana Neufeld 2020, Made by{' '}
                <a
                    href="https://github.com/zlobizlobi"
                    style={{
                        color: 'white',
                    }}
                >
                    zlobizlobi
                    </a>
            </CopyRighText>
        </FooterComponent>
    );
};
