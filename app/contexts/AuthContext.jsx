import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
} from "firebase/auth"
import { createContext, useContext, useEffect, useState } from "react"
import {auth} from "../utils/firebase";

const UserContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState([]);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const updateUser = (name, email) => {
        return updateProfile(auth.currentUser, {
            name,
            email,
            displayName: name,
        }).then (() => {
            console.log(auth.currentUser.displayName, auth.currentUser.email);
            alert("Your Profile has been updated")
        });
    };

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <UserContext.Provider value={{createUser, updateUser, user, logOut, signIn}}
        >
            {children}
        </UserContext.Provider>
    )
}
export const UserAuth = () => {
    return useContext(UserContext)
}
