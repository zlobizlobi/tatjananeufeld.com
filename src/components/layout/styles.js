import styled from 'styled-components';
import { media } from '@styles';

const AppContainer = styled.div`
    height: 100%;
    position: relative;
`;

const Main = styled.main`
    display: flex;
    flex-direction: column;
    padding-bottom: 520px;

    ${media.md(`
        padding-bottom: 300px;
    `)}
`;

export { AppContainer, Main };
