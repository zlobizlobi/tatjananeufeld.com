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
import { NavLink as NavLinkComponent } from '../navLink';
import { NAV_TITLES } from '../../constants/navTitles';
import styled from 'styled-components';

export const Footer = () =>
    <FooterComponent>
        <Name>Tatjana Neufeld</Name>
        <NavList>
            {NAV_TITLES.map(title => <NavLink key={title} title={title} />)}
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

const NavLink = styled(NavLinkComponent)`
    font-size: 10px;
`
