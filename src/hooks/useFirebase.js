import { useEffect, useState } from "react";
import initilizeFirebase from "../Pages/Login/Login/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";



initilizeFirebase()
const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');

    const registerUser = (email, password) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setAuthError('')
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                setAuthError(error.message);
                // ..
            })
            .finally(() => setIsLoading(false));
    }
    const loginUser = (email, password) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setAuthError('');
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {

                const uid = user.uid;
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [])
    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));

    }

    return {
        user, registerUser, loginUser, logOut, isLoading, authError
    }
}
export default useFirebase;