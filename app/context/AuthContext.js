 "use client"

import { createContext, useEffect,useState } from "react";
import {auth, provider } from "../firebase/config"
import { onAuthStateChanged, createUserWithEmailAndPassword,signInWithEmailAndPassword,signInWithPopup } from "firebase/auth";
 export const AuthContext = createContext();

 const AuthContextProvider = ({children}) =>{
    const [user, setUser] = useState({
        logged:false,
        user:null,
        uid:null
    })
    useEffect(() =>{
       onAuthStateChanged(auth, (user) =>{
        if(user){
            logOutUser();
        }
       }) 
    },[])
    const createUser = async(values) =>{
    const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password)
    const user = userCredential.user;
    setUser({logged:true, user:user.email, uid:user.uid}) 
}
    const logInUser = async (values) =>{
        const userCredential= await signInWithEmailAndPassword(auth, values.email, values.password)
        const user = userCredential.user;
        setUser({logged:true,user:user.email,uid:user.uid})
    }
    const logOutUser = async () =>{
        setUser({logged:false,user:user.email,uid:user.uid})
    }
    const googleLogin = async () =>{
        const userCredential = await signInWithPopup(auth, provider);
        const user = userCredential;
        setUser({logged:true, user:user.email, uid:user.uid})
    }

return <AuthContext.Provider value ={{user,createUser,logInUser,logOutUser,googleLogin}}>
         {children}
     </AuthContext.Provider>
 }
 export default AuthContextProvider