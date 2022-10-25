import {createContext,useState,useEffect} from "react";

import { onAuthStateChangedListener } from "../utils/firebase/firebase.utils";

//as the actual value you want to access
export const UserContext=createContext({
    currentUser:null,
    setCurrentUser:()=>null,
}); 

export const UserProvider=({children})=>{//here app is children
    const [currentUser,setCurrentUser]=useState(null);
    const value={currentUser,setCurrentUser};

    useEffect(()=>{
        onAuthStateChangedListener(()=>{})
    },[])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>//.provider is an component that will wrap around any other components that need access to the values inside. 
}

{/* <UserProvider>
    <app/> here app is children
</UserProvider> */}