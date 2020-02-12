import styled, { css } from 'styled-components'
import { NavLink as NavLinkComponent } from '../../navLink'
import { media } from '@styles'
import { LanguageSwitch as LanguageSwitchComponent } from '../../languageSwitch'

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 75px;
    width: 100vw;
    position: absolute;
    background-color: black;

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
    width: 100vw;
    height: 100vh;
    background-color: grey;
    opacity: 0;
    list-style-type: none;
    z-index: -1;
    padding: 120px 0  120px 40px;
`

export const NavLink = styled(NavLinkComponent)`
    color: rgba(255, 255, 255, 0.6);
    font-family: 'Montserrat';
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
