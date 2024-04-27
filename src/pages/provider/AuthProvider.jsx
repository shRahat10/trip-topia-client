import { createContext, useEffect, useState } from "react";
import auth from "../../../firebase.config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { BASE_URL } from "../../constent/constent";


export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [dataCountry, setDataCountry] = useState(null);

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

    const handleUpdateData = id => {
        setData((prev)=> prev?.filter(e => e?._id !== id))
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            unSubscribe();
        }
    }, [])

    useEffect(() => {
        fetch(BASE_URL + '/tourists-spots')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    useEffect(() => {
        fetch(BASE_URL + '/countries')
            .then(res => res.json())
            .then(data => setDataCountry(data))
    }, [])

    const authInfo = {
        user, loading, data, setData, handleUpdateData, dataCountry, setLoading, googleSignIn, githubSignIn, userRegistration, userLogin, userLogout,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;