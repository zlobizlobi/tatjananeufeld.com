import React from 'react';
import {
    FooterComponent,
    Name,
    NavList,
    IconContainer,
    Youtube,
    Facebook,
    CopyrightText,
    CopyrightImage,
    CopyrightImageContainer,
    CopyrightImageText,
} from './styles';
import { NavLink as NavLinkComponent } from '../navLink';
import { NAV_TITLES } from '../../constants/navTitles';
import styled from 'styled-components';
import copyrightImageEduardus from '../../images/eduardusLee.png';
import copyrightImageMarie from '../../images/mariejeanne.jpg';

export const Footer = () => (
    <FooterComponent>
        <Name>Tatjana Neufeld</Name>
        <NavList>
            {NAV_TITLES.map(title => (
                <NavLink key={title} title={title} />
            ))}
        </NavList>
        <IconContainer>
            <a href="https://youtube.com">
                <Youtube />
            </a>
            <a href="https://youtube.com" href="https://www.facebook.com/profile.php?id=100005453388422">
                <Facebook />
            </a>
        </IconContainer>
        <CopyrightText>
            © Copyright Tatjana Neufeld 2020, Made by{' '}
            <a
                href="https://github.com/zlobizlobi"
                style={{
                    color: 'white',
                }}
            >
                zlobizlobi
            </a>
        </CopyrightText>
        <CopyrightImageContainer
            href="https://www.instagram.com/mjvhovelltwesterflier"
            target="_blank"
        >
            <CopyrightImage src={copyrightImageMarie} />
            <CopyrightImageText>
                Marie-Jeanne van Hövell Photography
            </CopyrightImageText>
        </CopyrightImageContainer>
        <CopyrightImageContainer
            href="https://www.instagram.com/eduarduslee"
            target="_blank"
        >
            <CopyrightImage src={copyrightImageEduardus} />
            <CopyrightImageText>Eduardus Lee Photography</CopyrightImageText>
        </CopyrightImageContainer>
    </FooterComponent>
);

const NavLink = styled(NavLinkComponent)`
    font-size: 10px;
`;
