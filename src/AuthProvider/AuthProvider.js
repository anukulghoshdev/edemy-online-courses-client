import React, { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile, sendEmailVerification, signInWithPopup, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../firebase/firebase.init';






export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})
    // const [loading, setLoading] = useState(true)



    // user sign up
    const signupWtihEmailPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // update user profile (name)
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    // verify email
    const verifyEmail = (profile) => {
        return sendEmailVerification(auth.currentUser, profile);
    }

    // signin google
    const signInGoogle = (provider) => {
        // setLoading(true);
        return signInWithPopup(auth, provider)
    }

    const signInGitHub = (githubProvider) => {
        return signInWithPopup(auth, githubProvider)
    }



    // login user
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userlogOut = () => {
        // setLoading(true);
        return signOut(auth)
    }

    // so much difficult --> user login / signout hole eta track rakhe
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            // setLoading(false);
            console.log('Auth state change', currentUser);
        })
        return () => {
            unsubscribe();
        }
    })


    const AuthInfo = { user, signupWtihEmailPassword, updateUserProfile, verifyEmail, signInGoogle, signInGitHub, logIn, userlogOut }
    return (
        <div>
            <AuthContext.Provider value={AuthInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;