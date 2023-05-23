import { createContext, useContext, useState } from "react";
import { auth, signInWithEmailAndPassword, signOut } from '../firebase/auth';

const UserContext = createContext({})

export const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState();
    const [error, setError] = useState("");

    const signIn = (email, password) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((res) => setUser(res.user))
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false), setError(""));
    }

    const logOut = () => {
        signOut(auth)
    }

    const contextValue = {
        user,
        loading,
        error,
        signIn,
        logOut
    };
    
    return (
        <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
    );
};

export const useUserContext = () => useContext(UserContext)