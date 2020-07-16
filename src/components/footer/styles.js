import styled, { css } from 'styled-components';
import { media } from '@styles';
import { TiSocialFacebook, TiSocialYoutube } from 'react-icons/ti';

export const FooterComponent = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    position: absolute;
    bottom: 0;
    padding: 25px 0;
`;

export const Name = styled.h1`
    color: white;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    font-weight: normal;
    margin-bottom: 20px;
`;

export const IconContainer = styled.div`
    display: flex;
    margin: 20px 0;

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

export const NavList = styled.ul`
    display: flex;
    list-style-type: none;
    align-items: center;
    flex-direction: column;

    ${media.md(`
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    `)}
`;

export const CopyRighText = styled.h6`
    font-size: 11px;
    color: hsl(0, 0%, 50%);
    font-weight: normal;
    text-align: center;
`;
