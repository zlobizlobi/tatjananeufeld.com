import styled, { css } from 'styled-components'
import { NavLink as NavLinkComponent } from '../../navLink'
import { media } from '../../../styles'

export const Nav = styled.nav`
    display: none;
    position: absolute;
    z-index: 1;
    top: 40%;
    left: 50px;
    
    ${media.sm`
        display: flex;
        flex-direction: column;
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
    font-family: 'Cormorant Garamond';
    position: relative;
    left: 0;
    transition: left 0.3s ease-in-out;
    color: rgba(255,255,255,0.8);

    ${({ isActive }) => isActive && css`
        left: 5px;
        color: rgba(255,255,255,1);
    `}

    :hover {
        left: 5px;
        color: rgba(255, 255, 255, 1);
    }

    &:last-child {
        margin: 0;
    }
`