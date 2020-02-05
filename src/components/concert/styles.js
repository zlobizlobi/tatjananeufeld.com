import styled, { css } from 'styled-components'
import { media } from '@styles'

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    color: white;
    overflow-y: ${({ isExtended }) => (isExtended ? 'visible' : 'hidden')};

    &:last-child {
        margin: 0;
    }

    ${media.md(`    
        min-width: 600px;
    `)}
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    transition: height 0.3s ease-out;
    padding: 30px 15px 0 15px;

    &:last-child {
        border: none;
    }

    ${media.md(`
        padding: 30px 30px 0 30px;
    `)}
`

export const Name = styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-weight: normal;
    letter-spacing: 1px;
    font-size: 15px;
    cursor: pointer;

    ${media.md(`
    font-size: 22px;
    margin-bottom: 30px;
  `)}
`

export const DateContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    font-family: 'Montserrat', sans-serif;
    font-weight: lighter;
    align-items: center;
    margin-bottom: 10px;
    font-size: 10px;
    line-height: 25px;

    ${media.md(`
    font-size: 13px;
  `)}
`

export const NameDateContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const Divider = styled.span`
    transform: rotate(90deg);
    height: 1px;
    border-top: 1px solid white;
    width: 15px;
    margin: 0 4px;
`

export const VenueContainer = styled.div`
    display: flex;
`
export const VenueItem = styled.span`
    margin-right: 5px;
    font-style: italic;
    font-family: 'Montserrat', sans-serif;
    font-size: 10px;
    color: #808080;
    &:last-child {
        margin: 0;
    }

    ${media.md(`
    font-size: 11px;
  `)}
`

export const Poster = styled.img`
    margin-right: 20px;
    object-fit: cover;
    width: 80px;
    height: 110px;
    max-height: 250px;
    align-self: flex-start;

    ${media.md(`
    width: 150px;
    height: 200px;
  `)}
`
export const Flex = styled.div`
    display: flex;
    ${({ flexDirection }) => css`
        flex-direction: ${flexDirection};
    `}
`

export const ContainerDivider = styled.span`
    display: inline;
    height: 1px;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    width: 100%;
    align-self: center;
    margin-top: 30px;
`

export const Button = styled.button`
    background-color: transparent;
    padding: 7.5px;
    align-self: flex-end;
    border: 1px solid rgba(255, 255, 255, 0.4);
    color: white;
    transition: all 0.3s ease;
    cursor: pointer;
    position: relative;
    z-index: 1;
    font-size: 10px;
    margin-top: 30px;
    letter-spacing: 1px;

    :hover {
        color: black;
        background-color: white;
    }

    ${media.md(`
  font-size: 12px;
  padding: 5px 7.5px;
`)}
`

export const TimeContainer = styled.div`
    line-height: 25px;
`

export const HiddenContainer = styled.div`
    flex-direction: column;
    z-index: 0;
    transition: all 0.3s ease;
    width: 100%;
    opacity: ${({ isExtended }) => (isExtended ? '1' : '0')};
    display: ${({ isExtended }) => (isExtended ? 'flex' : 'none')};
    margin: 30px 0;
`

export const HiddenHeading = styled.h4`
    color: white;
    font-weight: normal;
    margin: 0 0 20px 0;
    font-family: 'Montserrat', sans-serif;
    border-bottom: 1px solid white;
    padding-bottom: 2px;
    align-self: flex-start;
    font-size: 14px;
    font-weight: bold;

    &:nth-child(2) {
        margin-top: 20px;
    }

    ${media.md(`
    font-size: 16px;
  `)}
`

export const VendorContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    color: white;
    transition: color 0.3s ease;
    text-decoration: none;

    > button {
        font-size: 11px;
    }

    &:last-child {
        margin: 0;
    }

    ${media.md(`
        > button {
            font-size: 13px;  
        }
  `)}
`

export const Program = styled.span`
    white-space: pre-wrap;
`

export const GetTicketsButton = styled.button`
    border-bottom: 0.5px solid rgba(255, 255, 255, 0.8);
    border-top: none;
    border-left: none;
    border-right: none;
    color: white;
    transition: color 0.3s ease;
    background-color: transparent;
    z-index: -1;
`

export const HiddenSubContainer = styled.div`
    font-size: 11px;
    margin-bottom: 50px;

    &:last-child {
        max-width: 500px;
        line-height: 22px;
    }

    ${media.md(`
    font-size: 13px;
  `)}
`

export const DownloadLink = styled.a`
    display: inline-flex;
    align-items: center;
    font-size: 11px;
    cursor: pointer;
    text-decoration: underline;
    color: white;
    align-self: flex-start;

    > svg {
        margin-right: 10px;
        font-size: 18px;
    }

    ${media.md(`
    font-size: 13px;
  `)}
`
