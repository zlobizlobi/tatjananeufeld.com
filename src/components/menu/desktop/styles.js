import styled, { css } from 'styled-components'
import { NavLink as NavLinkComponent } from '../../navLink'
import { media } from '../../../styles'

export const Nav = styled.nav`
    display: none;
    position: fixed;
    z-index: 3;
    top: 30%;
    padding: 30px;
    left: 25px;
    
    ${media.md`
        display: flex;
        flex-direction: column;
        min-width: 180px;
        `
    }
     
    ${media.lg`
        left: 100px;
    `}

    ${media.md`
        display: flex;
        flex-direction: column;
        min-width: 180px;
    `}
`

export const NavList = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

export const NavLink = styled(NavLinkComponent)`
    margin-bottom: 10px;
    font-family: 'Montserrat', serif;
    position: relative;
    left: 0;
    transition: left 0.3s ease-in-out;
    color: rgba(255,255,255,0.6);

    ${({ isActive }) => isActive && css`
        left: 10px;
        color: rgba(255,255,255,1);
    `}

    :hover {
        left: 10px;
        color: rgba(255, 255, 255, 1);
    }

    &:last-child {
        margin: 0;
    }

    &:last-child > a {
        margin: 0;
        padding-bottom: 5px;
    }
`

export const Divider = styled.span`
    width: 100px;
    height: 0.5px;
    border-top: 1px solid white;
    margin: 20px 0;
`
