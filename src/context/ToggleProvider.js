import React, {createContext, useContext, useState} from 'react';
import {Route, Redirect} from 'react-router-dom';

const ToggleContext = createContext();

function ToggleProvider({children}) {

    const [ isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(pState => !pState);
    }

  return (
        <ToggleContext.Provider 
            value={{
                isLoggedIn,
                handleLogin
            }}
        >
            {children}
        </ToggleContext.Provider>
  );
}

function useToggle() {
    const context = useContext(ToggleContext);
    return context;
}

export {ToggleProvider, useToggle};

