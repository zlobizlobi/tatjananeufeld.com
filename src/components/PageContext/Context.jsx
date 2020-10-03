import React, { createContext } from 'react';

const PageContext = createContext({});

export const PageContextProvider = ({ children, context }) => {
    console.log(context);
    return (
        <PageContext.Provider value={context}>
            {children}
        </PageContext.Provider>
    )
}

export const usePageContext = () => React.useContext(PageContext);
