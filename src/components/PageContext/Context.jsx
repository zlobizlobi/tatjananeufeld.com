import React, { createContext } from 'react';

const PageContext = createContext({});

export const PageContextProvider = ({ pathContext, children }) => (
    <PageContext.Provider value={pathContext}>{children}</PageContext.Provider>
);

export const usePageContext = () => React.useContext(PageContext);
