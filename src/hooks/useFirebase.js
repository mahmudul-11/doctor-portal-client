import { useEffect, useState } from "react";
import initilizeFirebase from "../Pages/Login/Login/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, getIdToken, signOut } from "firebase/auth";



initilizeFirebase()
const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');

    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                setAuthError('');
                const newUser = { email, displayName: name };
                // Send data to the database
                saveUser(email, name, 'POST');
                //upate to the firebae 
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });
                history.replace('/');

            })
            .catch((error) => {
                const errorCode = error.code;
                setAuthError(error.message);
                // ..
            })
            .finally(() => setIsLoading(false));
    }
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const destination = location?.state?.from || '/';
                history.replace(destination);

                setAuthError('');
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }
    // -------------------------------- Google Sign In ----------------------------
    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
                //Save to Database
                saveUser(user.email, user.displayName, 'PUT');
            }).catch((error) => {
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
                // JWT Token related code 
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken);
                    })
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [])


    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])


    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));

    }
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)

        })
            .then()


    }

    return {
        user, admin, token, registerUser, loginUser, logOut, isLoading, authError, signInWithGoogle
    }
}
export default useFirebase;