import styled from 'styled-components';
import {
    Heading as HeadingComponent,
    Section as SectionComponent,
} from '@components';
import { IoIosPhonePortrait } from 'react-icons/io';
import { media } from '@styles';

export const Section = styled(SectionComponent)`
    color: white;
    align-self: center;
    padding: 0 20px 150px 20px;
    ${media.md(`
        min-width: 600px;
    `)}
`;

export const Heading = styled(HeadingComponent)`
    && {
        margin: 0;
    }
`;

export const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
`;

export const Number = styled.h2`
    font-size: 16px;
    font-weight: normal;
    margin-bottom: 10px;

    ${media.md(`
        font-size: 25px;        
    `)}
`;

export const Email = styled.h6`
    color: rgba(255, 255, 255, 0.4);
    font-weight: normal;
    font-size: 16px;
`;

export const PhoneIcon = styled(IoIosPhonePortrait)`
    color: white;
    width: 30px;
    height: 30px;
    margin: 30px 0;
`;

export const FormHeading = styled.h3`
    font-weight: lighter;
    text-align: center;
    font-size: 16px;

    ${media.md(`
      font-size: 23px;
      max-width: 600px;
    `)}
`;
