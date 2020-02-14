import styled, { css } from 'styled-components'
import { NavLink as NavLinkComponent } from '../../navLink'
import { media } from '@styles'
import { LanguageSwitch as LanguageSwitchComponent } from '../../languageSwitch'
import { PageLink as PageLinkComponent } from '../../pageLink'

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 75px;
    width: 100vw;
    position: absolute;

    ${media.lg(`
        display: none;
    `)}
`

export const HamburgerButton = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 15px; 
    width: 25px;
    margin-left: 30px;
    cursor: pointer;
    background-color: transparent; 
    border: none; 
    z-index: 3;
    outline: none;
`
export const HamburgerBar = styled.div`
    width: 25px;
    height: 2px;
    border-top: 2px solid white;
`

export const Navigation = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: #48464D;
    opacity: 0;
    list-style-type: none;
    z-index: -1;
    padding: 120px 40px 120px;
`

export const NavLink = styled(NavLinkComponent)`
    color: rgba(255,255,255,0.7);
    font-family: 'Montserrat', sans-serif;
    position: relative;
    left: 0;
    transition: left 0.2s ease-in-out;

     > a {
         font-size: 20px;
    }

    ${({ isActive }) =>
        isActive &&
        css`
            color: white;
        `}

    :hover {
        color: white;
        left: 10px;
    }
`

export const LanguageSwitch = styled(LanguageSwitchComponent)`
    margin: 0 30px 0 0;
`
export const PageLink = styled(PageLinkComponent)`
    font-size: 20px;
    color: rgba(255,255,255,0.7);
    position: relative;
    left: 0;
    transition: left 0.2s ease-in-out;

    :hover {
        color: white;
        left: 10px;
    }
`