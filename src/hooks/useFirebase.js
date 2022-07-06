import { useEffect, useState } from "react"
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import app from "../firebase.init";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const signInWithGoogle = () => {
        console.log("Sign In soon")
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                console.log(user);
            }).catch((error) => {
                console.log('error', error)
            });

    }

    const handleSignOut = () => {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
            });

    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user);
        })
    })

    return {
        user, signInWithGoogle, handleSignOut
    };
}

export default useFirebase;