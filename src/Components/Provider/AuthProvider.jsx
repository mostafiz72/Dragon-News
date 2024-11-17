import React, { createContext, useEffect, useState } from 'react'
import { app } from '../Firebase/Firebase.config';
export const AuthContext = createContext(null)
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
const auth = getAuth(app);
export default function AuthProvider({ children }) {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    console.log(user, loading);
    

    const createNewUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    /// sing Out user functionality satart here now

    const singOut = ()=>{
        setLoading(true);
        return signOut(auth);
    }

    /// userLogin functionality satart here now

    const userLogin = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    /// Updated profile functionality satart here now

    const updateUserProfile = (updatedData) =>{
        return updateProfile(auth.currentUser, updatedData);
    }

    const AuthInfo = {
        user, 
        setUser,
        createNewUser,
        singOut,
        userLogin,
        updateUserProfile,
        loading
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            setUser(unsubscribe);
        }
    }, [])

  return (
    <AuthContext.Provider value={AuthInfo}>
      { children }
    </AuthContext.Provider>
  )
}
