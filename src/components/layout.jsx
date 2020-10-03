import React from 'react';
import { MobileNavigation, DesktopNavigation } from './Navigation';
import styled from 'styled-components';

export default ({ children }) => {
    return (
        <AppContainer>
            <MobileNavigation />
            <DesktopNavigation />
            <Main>{children}</Main>
        </AppContainer>
    )
}

const AppContainer = styled.div`
    display: flex;
    min-height: 100vh;
    flex-direction: column;
`;

const Main = styled.main`
    flex-grow: 1;
`;
