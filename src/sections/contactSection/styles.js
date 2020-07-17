import styled from 'styled-components';
import {
    Heading as HeadingComponent,
} from '@components';
import { media } from '@styles';

export const Heading = styled(HeadingComponent)`
    color: white;
    margin: 0;
`;

export const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px 0;
`;

export const ContactOption = styled.h4`
    font-weight: normal;
    margin-bottom: 20px;
    color: #a8a8a8;

    &:last-child {
        margin: 0;
    }

    > a {
        text-decoration: none;
        color: #a8a8a8;
    }
`;

export const LogoContainer = styled.a`
    margin-bottom: 20px;
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

export const FormContainer = styled.div`
    margin-top: 30px;
    width: 100%;

    ${media.xs(`
        width: 350px;
    `)}
`;

