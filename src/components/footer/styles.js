import styled from 'styled-components';
import { media } from '@styles';
import { NavLink as NavLinkComponent } from '../navLink';
import { TiSocialFacebook, TiSocialYoutube } from 'react-icons/ti';
import { PageLink as PageLinkComponent } from '../pageLink';

export const FooterComponent = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 520px;
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: -2px -7px 18px -13px rgba(255, 255, 255, 0.75);
    width: 100%;
    position: absolute;
    bottom: 0;
    box-sizing: border-box;
    ${media.md(`
        height: 300px;
    `)}
`;

export const IconContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
    > a {
        text-decoration: none;
        color: white;
        margin-right: 5px;

        &:last-child {
            margin: 0;
        }
    }
`;

export const Facebook = styled(TiSocialFacebook)`
    color: white;
    font-size: 25px;
`;

export const Youtube = styled(TiSocialYoutube)`
    color: white;
    font-size: 25px;
`;

export const Name = styled.h1`
    color: white;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: normal;
    margin: 20px 0;
    font-weight: normal;
`;

export const NavList = styled.ul`
    display: flex;
    list-style-type: none;
    align-items: center;
    flex-direction: column;

    ${media.md(`
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        line-height: 22px;
  `)}
`;

export const PageLink = styled(PageLinkComponent)`
    font-size: 12px;
    color: white;
    text-transform: uppercase;
`;

export const NavLink = styled(NavLinkComponent)`
    margin: 0 0 30px 0;
    text-transform: uppercase;
    color: white;

    > a {
        font-size: 12px;
    }

    &:last-child {
        margin: 0;
    }

    ${media.md(`
        margin: 0 15px 0 0;

        &:last-child{
            margin: 0;
        }
    `)}
`;

export const CopyRighText = styled.h6`
    font-size: 11px;
    color: hsl(0, 0%, 50%);
    font-family: 'Montserrat', sans-serif;
    font-weight: normal;
    margin: 20px 0;
    line-height: 20px;
    text-align: center;
    letter-spacing: 2.5px;
    max-width: 95%;
`;
