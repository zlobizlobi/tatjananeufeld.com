import styled from 'styled-components';
import { Heading as HeadingComponent } from '@components';
import { media } from '@styles';

export const Heading = styled(HeadingComponent)`
    margin: 0;
`;

export const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px 0;
`;

export const ContactOption = styled.p`
    font-weight: normal;
    margin-bottom: 25px;

    &:last-child {
        margin: 0;
    }

    > a {
        text-decoration: none;
        color: #b7b7b7;
    }
`;

export const LogoContainer = styled.a`
    margin-bottom: 20px;
`;

export const FormHeading = styled.h3`
    text-align: center;
    font-size: 16px;
    color: white;
    font-weight: 100;

    ${media.md(`
      font-size: 22px;
    `)}
`;

export const FormContainer = styled.div`
    margin-top: 30px;
    width: 100%;

    ${media.sm(`
        width: 350px;
    `)}
`;
