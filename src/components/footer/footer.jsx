import React from 'react';
import {
    FooterComponent,
    Name,
    NavList,
    IconContainer,
    Youtube,
    Facebook,
    CopyRighText,
} from './styles';
import { useIntl } from 'react-intl';
import { NavLink } from '../navLink';

export const Footer = () => {
    const { locale } = useIntl();

    return (
        <FooterComponent>
            <Name>Tatjana Neufeld</Name>
            <NavList>
                <NavLink title="home" />
                <NavLink title="concerts" />
                <NavLink title="biography" />
                <NavLink title="gallery" />
                <NavLink title="partnerships" />
                <NavLink title="tatyana-podyomova" />
                <NavLink title="gallery" />
                <NavLink title="contact" />
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
