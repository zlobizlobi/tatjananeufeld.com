import styled from 'styled-components';
import { media } from '@styles';

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    color: #fff;
    padding: 40px 0 40px 0;

    &:last-child {
        padding: 40px 0 0 0;
    }

    ${media.md(`
        padding: 80px 0 80px 0;
    `)}
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    :last-child > span {
        display: none;
    }
`;

export const Flex = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ContainerDivider = styled.span`
    height: 2px;
    border-top: 2px solid rgba(255, 255, 255, 0.1);
    align-self: center;
    width: 100%;
`;

export const Button = styled.button`
    padding: 5px 7.5px;
    align-self: flex-end;
    display: flex;
    align-items: center;
    color: white;
    transition: all 0.3s ease;
    z-index: 1;
    font-size: 9px;
    margin-top: 30px;
    border: 1px solid #808080;
    text-transform: uppercase;
    letter-spacing: 1px;

    :hover {
        color: #808080;
        background-color: white;

        > svg {
            color: #808080;
        }
    }

    > svg {
        color: #808080;
        font-size: 14px;
    }

    ${media.md(`
        font-size: 10px;

        > svg {
            font-size: 17px;
        }
    `)}
`;

export const HiddenContainer = styled.div`
    flex-direction: column;
    z-index: 0;
    width: 100%;
    display: ${({ isExtended }) => (isExtended ? 'flex' : 'none')};
    margin-top: 30px;
`;

export const HiddenHeading = styled.h4`
    font-weight: normal;
    margin: 0 0 10px 0;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;

    ${media.md(`
        font-size: 16px;
    `)}
`;

export const VendorContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    color: #808080;
    text-decoration: none;

    &:last-child {
        margin: 0;
    }

    > button {
        font-size: 12px;
    }

    ${media.md(`
        > button {
            font-size: 14px;
        }
    `)}
`;

export const Program = styled.span`
    white-space: pre-wrap;
    color: #808080;
`;

export const GetTicketsButton = styled.button`
    border-bottom: 0.5px solid rgba(255, 255, 255, 0.8);
    padding-bottom: 2px;
    color: white;
    z-index: -1;
`;

export const HiddenSubContainer = styled.div`
    font-size: 12px;
    margin-bottom: 40px;

    ${media.md(`
        font-size: 13px;
    `)}
`;

export const DownloadLink = styled.a`
    display: flex;
    align-items: center;
    font-size: 12px;
    color: white;

    > svg {
        margin-right: 10px;
        font-size: 18px;
    }

    ${media.md(`
        font-size: 13px;
    `)}
`;
