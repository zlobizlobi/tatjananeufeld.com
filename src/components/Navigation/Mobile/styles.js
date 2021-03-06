import styled, { css } from 'styled-components';
import { Navlink as NavlinkComponent } from '../../Navlink';
import { media } from '@styles';
import { LanguageSwitch as LanguageSwitchComponent } from '../../LanguageSwitch';

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 75px;
    width: 100%;
    position: absolute;
    z-index: 1;

    ${media.lg(`
        display: none;
    `)}
`;

export const HamburgerButton = styled.button.attrs({
    'aria-label': 'Menu button',
})`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 15px;
    width: 25px;
    margin-left: 20px;
    z-index: 3;
    border-radius: 0;
    outline: none;
`;

export const HamburgerBar = styled.div`
    width: 25px;
    height: 2px;
    border-top: 2px solid white;
`;

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
    background-color: #48464d;
    opacity: 0;
    list-style-type: none;
    z-index: -1;
    padding: 120px 40px 120px;
`;

export const Navlink = styled(NavlinkComponent)`
    color: rgba(255, 255, 255, 0.7);
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
`;

export const LanguageSwitch = styled(LanguageSwitchComponent)`
    margin: 0 20px 0 0;
`;

// export const PageLink = styled(PageLinkComponent)`
//     font-size: 20px;
//     color: rgba(255, 255, 255, 0.7);
//     position: relative;
//     left: 0;
//     transition: left 0.2s ease-in-out;

//     :hover {
//         color: white;
//         left: 10px;
//     }
// `;
