import styled from 'styled-components';
import {
    Heading as HeadingComponent,
    Section as SectionComponent,
} from '@components';
import { media } from '@styles';

export const Section = styled(SectionComponent)`
    color: white;
    align-self: center;
    padding: 0 20px 150px 20px;
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
    img {
        margin-bottom: 20px;  
    }
`;

export const Contact = styled.h2`
    display: flex;
    align-items: center;
    font-size: 13px;
    font-weight: normal;
    margin-bottom: 20px;
    color: #A8A8A8;
 
    &:last-child {
        margin: 0;
        border-bottom: 1px solid white;
    }

    ${media.md(`
        font-size: 16px;        
    `)}

    > a {
        text-decoration: none;
        color: #A8A8A8;
    }
`;

export const ContactType = styled.span`
    padding-left: 10px;
    border-left: 1px solid #A8A8A8;
    margin-left: 10px;

    &:last-child {
        display: flex;
        align-items: center;
    }
`

export const Email = styled.h6`
    color: white;
    font-weight: normal;
    font-size: 16px;
`;

export const FormContainer = styled.div`
    margin-top: 30px;
    width: 100%;
`
export const FormHeading = styled.h3`
    font-weight: lighter;
    text-align: center;
    font-size: 16px;

    ${media.md(`
      font-size: 20px;
      font-weight: 600; 
    `)}
`;

