import {createContext,useState,useEffect,useReducer} from "react";

import { createAction } from "../utils/reducer/reducer.utils";

import { createUserDocumentFromAuth, onAuthStateChangedListener, signOutUser } from "../utils/firebase/firebase.utils";

//as the actual value you want to access
export const UserContext=createContext({
    currentUser:null,
    setCurrentUser:()=>null,
}); 

export const USER_ACTION_TYPES={
    "SET_CURRENT_USER":"SET_CURRENT_USER"
}

const userReducer=(state,action)=>{
    const {type,payload}=action;


    switch(type){
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser:payload
            }
        // break;

        // case "increment":
        //     return {
        //         value: state.value+1,
        //     }
        
        default:
            throw new Error(`Unhandled type ${type} in userReducer`);
        // break;
    }
}

const INITIAL_STATE={
    currentUser:null
}

export const UserProvider=({children})=>{//here app is children
    // const [currentUser,setCurrentUser]=useState(null);
    const [state,dispatch]=useReducer(userReducer,INITIAL_STATE); // Now when you should use reducer is when you have multiple different readable values update every time at that time reducer is best way

    const {currentUser}=state;
    // console.log("USer",currentUser);

    const setCurrentUser=(user)=>{
        dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER,user));
    }
    // console.log("USer",currentUser);

    const value={currentUser,setCurrentUser};
    // console.log(setCurrentUser);
    useEffect(()=>{
        const unsubscribe=onAuthStateChangedListener((user)=>{
        //   console.log("useEffect",user);  

        if(user){
            createUserDocumentFromAuth(user);
        }
        setCurrentUser(user);
        }) 

        return unsubscribe
    },[])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>//.provider is an component that will wrap around any other components that need access to the values inside. 
}

{/* <UserProvider>
    <app/> here app is children
</UserProvider> */}