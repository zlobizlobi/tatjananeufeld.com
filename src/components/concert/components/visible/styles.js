import styled from 'styled-components';
import { media } from '@styles';
import Img from 'gatsby-image';

const Name = styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    cursor: pointer;
    margin-bottom: 20px;
    font-weight: normal;

    ${media.md(`
        font-size: 22px;
    `)}
`;

const DateContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
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

const VenueContainer = styled.div`
    display: flex;
`;

const VenueItem = styled.span`
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
    VenueContainer,
    NameDateContainer,
    DateContainer,
    Name,
    TimeContainer,
};
