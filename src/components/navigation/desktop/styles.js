import styled, { keyframes, css } from 'styled-components';
import { NavLink as NavLinkComponent } from '../../navLink';
import { LanguageSwitch as LanguageSwitchComponent } from '../../languageSwitch';
import { media } from '@styles';
import { Link } from 'gatsby';

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
    margin: 15px 0 0 0;

    ${media.lg(`
        padding-left: 15px;
        border-left: 1px solid rgba(255, 255, 255, 0.7);
        margin: 0;
    `)}
`;

export const Nav = styled.nav`
    display: none;
    width: 100%;
    position: ${({ isScrolled }) => (isScrolled ? 'fixed' : 'absolute')};
    z-index: 2;
    transition: all 0.3s ease;
    padding: 15px 0;
    line-height: 25px;

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
      justify-content: center;
  `)}
`;

export const NavList = styled.ul`
    display: flex;
    list-style-type: none;
    flex-wrap: wrap;
    justify-content: center;
`;
