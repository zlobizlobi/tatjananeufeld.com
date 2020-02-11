import styled, { keyframes, css } from 'styled-components'
import { NavLink as NavLinkComponent } from '../../navLink'
import { LanguageSwitch as LanguageSwitchComponent } from '../../languageSwitch'
import { media } from '@styles'

const navbarAnimation = keyframes`
  0% {
      top: -30px;
  }
  50% {
      top: -15px;
  }
  100% {
      top: 0px;
  }
`

export const LanguageSwitch = styled(LanguageSwitchComponent)`
    height: 30px;
    align-items: center;
    margin: 15px 0 0 0;

    ${media.lg(`
    padding-left: 15px;
    border-left: 1px solid rgba(255, 255, 255, 0.7);
    margin: 0 0 0 15px;
  `)}
`

export const Nav = styled.nav`
    width: 100%;
    background-color: ${({ isScrolled }) =>
        isScrolled ? '#0d0d0d' : 'transparent'};
    position: ${({ isScrolled }) => (isScrolled ? 'fixed' : 'absolute')};
    display: none;
    color: white;
    z-index: 2;
    transition: all 0.3s ease;
    padding: 15px 10px;
    line-height: 25px;

    ${({ isScrolled }) =>
        isScrolled &&
        css`
            animation: 0.3s ${navbarAnimation} ease;
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        `}

    ${media.lg(`
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
  `)}
`

export const NavList = styled.ul`
    display: flex;
    list-style-type: none;
    flex-wrap: wrap;
    justify-content: center;
`

export const NavLink = styled(NavLinkComponent)`
    font-family: 'Montserrat', serif;
    transition: left 0.3s ease-in-out;
    color: rgba(255, 255, 255, 0.7);
    margin-right: 15px;
    text-transform: uppercase;

    :hover {
        left: 10px;
        color: rgba(255, 255, 255, 1);
    }

    ${({ isActive }) =>
        isActive &&
        css`
            color: white;
        `}

    > a {
        font-size: 12px;
    }

    &:last-child {
        margin: 0;
    }
`
