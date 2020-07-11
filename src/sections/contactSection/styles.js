import styled from 'styled-components';
import {
    Heading as HeadingComponent,
    Section as SectionComponent,
} from '@components';
import { media } from '@styles';

export const Section = styled(SectionComponent)`
    color: white;
    align-self: center;
    padding: 0 20px 150px 20px !important;
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
    margin: 50px 0;
`;

export const ContactOption = styled.h2`
    font-size: 13px;
    font-weight: normal;
    margin-bottom: 20px;
    color: #a8a8a8;

    &:last-child {
        margin: 0;
    }

    ${media.md(`
        font-size: 16px;        
    `)}

    > a {
        text-decoration: none;
        color: #a8a8a8;
    }
`;

export const FormHeading = styled.h3`
    font-weight: lighter;
    text-align: center;
    font-size: 16px;

    ${media.md(`
      font-size: 20px;
      font-weight: 600; 
    `)}
`;

export const FormContainer = styled.div`
    margin-top: 30px;
    width: 100%;
`;

