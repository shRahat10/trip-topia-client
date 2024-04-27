import { createContext, useEffect, useState } from "react";
import auth from "../../../firebase.config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";


export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const githubSignIn = () => {
        return signInWithPopup(auth, githubProvider)
    }

    const userRegistration = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userLogout = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user, googleSignIn, githubSignIn, userRegistration, userLogin, userLogout,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;