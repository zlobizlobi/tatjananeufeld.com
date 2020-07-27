import styled from 'styled-components';
import { media } from '@styles';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    color: white;
    padding: 20px 0;

    ${media.md(`
        padding: 80px;
    `)}
`;

export const Flex = styled.div`
    display: flex;
    flex-direction: column;
`;


export const HiddenContainer = styled.div`
    flex-direction: column;
    z-index: 0;
    display: flex;
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

export const GetTicketsButton = styled.a`
    text-decoration: none;
    border-bottom: 0.5px solid rgba(255, 255, 255, 0.8);
    padding-bottom: 2px;
    color: white;
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
