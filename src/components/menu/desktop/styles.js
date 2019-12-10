import styled, { css } from 'styled-components'
import { NavLink as NavLinkComponent } from '../../navLink'
import { media } from '../../../styles'

export const Nav = styled.nav`
    display: none;
    position: fixed;
    z-index: 1;
    top: 35%;
    left: 5%;
    
    ${media.lg`
        display: flex;
        flex-direction: column;
        padding: 40px 30px;
        background-color: rgba(255,255,255,0.2);
        box-shadow: 10px 10px 5px -8px rgba(255,255,255,0.75);`}
`

export const NavList = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

export const NavLink = styled(NavLinkComponent)`
    margin-bottom: 10px;
    font-family: 'Cormorant Garamond';
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
