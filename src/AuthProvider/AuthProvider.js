import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.init';






export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    // const [user, setUser] = useState(null);

    
    // user sign up
    const signupWtihEmailPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // update user profile (name)
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }


    const AuthInfo = { signupWtihEmailPassword, updateUserProfile }
    return (
        <div>
            <AuthContext.Provider value={AuthInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;