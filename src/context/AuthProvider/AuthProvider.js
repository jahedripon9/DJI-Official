import React from 'react';
import { createContext } from 'react/cjs/react.development';
import useFirebase from '../../hooks/useFirebase';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const allContexts = useFirebase();
    return (
        <AuthContext.Provider value ={allContexts}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;