import styled, { css } from 'styled-components';
import { media } from '@styles';
import Img from 'gatsby-image';

const Name = styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-weight: normal;
    letter-spacing: 1px;
    font-size: 15px;
    cursor: pointer;

    ${media.md(`
        font-size: 22px;
        margin-bottom: 30px;
  `)}
`;

const DateContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    font-family: 'Montserrat', sans-serif;
    font-weight: lighter;
    align-items: center;
    margin-bottom: 10px;
    font-size: 11px;
    line-height: 25px;

    ${media.md(`
        font-size: 13px;
  `)}
`;

const NameDateContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Divider = styled.span`
    transform: rotate(90deg);
    height: 1px;
    border-top: 1px solid white;
    width: 15px;
    margin: 0 4px;
`;

const VenueContainer = styled.div`
    display: flex;
`;

const VenueItem = styled.span`
    margin-right: 5px;
    font-style: italic;
    white-space: pre-wrap;
    font-family: 'Montserrat', sans-serif;
    font-size: 11px;
    color: #808080;
    &:last-child {
        margin: 0;
    }

    ${media.md(`
    font-size: 12px;
  `)}
`;

const Poster = styled(Img)`
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
`;

const Flex = styled.div`
    display: flex;
`;

const TimeContainer = styled.div`
    line-height: 25px;
`;

export {
    Flex,
    Poster,
    VenueItem,
    Divider,
    VenueContainer,
    NameDateContainer,
    DateContainer,
    Name,
    TimeContainer,
};
