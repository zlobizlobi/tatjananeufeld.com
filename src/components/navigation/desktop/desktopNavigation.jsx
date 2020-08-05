import React, { useEffect, useState } from 'react';
import { NavLink } from '../../navLink';
import { NAV_TITLES } from '../../../constants/navTitles';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';
import styled, { keyframes, css } from 'styled-components';
import { LanguageSwitch as LanguageSwitchComponent } from '../../languageSwitch';
import { media } from '@styles';
import { Link } from 'gatsby';

export const DesktopNavigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        if (window.pageYOffset > 350) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    });

    const { locale } = useIntl();

    return (
        <Nav isScrolled={isScrolled}>
            <NavListContainer>
                <Logo to={`/${locale}/#home`}>
                    <FormattedMessage id="tatjana" />
                </Logo>
                <NavList>
                    {NAV_TITLES.map(title => (
                        <NavLink key={title} title={title} />
                    ))}
                </NavList>
            </NavListContainer>
            <LanguageSwitch />
        </Nav>
    );
};

const NavListContainer = styled.div`
    display: flex;
`;

export const Logo = styled(Link)`
    text-decoration: none;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    transition: color 0.3s ease;
    font-size: 16px;
    color: white;
    cursor: pointer;
    padding-right: 10px;
    margin-right: 10px;
    border-right: 1px solid white;
    line-height: 25px;

    :hover {
        color: rgba(255, 255, 255, 1);
    }
`;

const navbarAnimation = keyframes`
  0% {
      top: -30px;
  }
  100% {
      top: 0px;
  }
`;

export const LanguageSwitch = styled(LanguageSwitchComponent)`
    height: 30px;
    align-items: center;
`;

export const Nav = styled.nav`
    display: none;
    width: 100%;
    position: ${({ isScrolled }) => (isScrolled ? 'fixed' : 'absolute')};
    z-index: 2;
    transition: all 0.3s ease;
    padding: 15px 20px;

    ${({ isScrolled }) =>
        isScrolled &&
        css`
            animation: 0.2s ${navbarAnimation} ease-in-out;
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
            background-color: black;
        `}

    ${media.lg(`
      display: flex;
      align-items: center;
      justify-content: space-between;
  `)}
`;

export const NavList = styled.ul`
    display: flex;
    list-style-type: none;
    flex-wrap: wrap;
    line-height: 25px;
`;
