import styled, { css } from 'styled-components';
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
    width: 100%;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    position: absolute;
    bottom: 0;

    ${media.md(`
        height: 300px;
    `)}
`;

export const IconContainer = styled.div`
    display: flex;
    margin-top: 20px;

    > a {
        margin-right: 5px;
    }

    &:last-child {
        margin: 0;
    }
`;

const iconStyle = css`
    color: white;
    font-size: 25px;
`;

export const Facebook = styled(TiSocialFacebook)`
    ${iconStyle}
`;

export const Youtube = styled(TiSocialYoutube)`
    ${iconStyle}
`;

export const Name = styled.h1`
    color: white;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    font-weight: normal;
    margin: 20px 0;
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

        &:last-child {
            margin: 0;
        }
    `)}
`;

export const CopyRighText = styled.h6`
    font-size: 11px;
    color: hsl(0, 0%, 50%);
    font-family: 'Montserrat', sans-serif;
    font-weight: normal;
    margin-top: 20px;
    letter-spacing: 1.5px;
    max-width: 95%;
    text-align: center;
    line-height: 20px;
`;
