import { createContext, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export const authContext = createContext();

const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        user,
        loading,
        createUser
    }

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;