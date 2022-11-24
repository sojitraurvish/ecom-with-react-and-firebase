import { USER_ACTION_TYPES } from "./user.types";

import { 
    signInFailed,
    signUpFailed,
    signOutFailed,
    signOutSuccess,
    signInSuccess
 } from "./user.action";
import { AnyAction } from "redux";
import { UserData } from "../../utils/firebase/firebase.utils";

export type UserState={
    readonly currentUser:UserData|null,
    readonly isLoading:boolean,
    readonly error:Error|null
}

const INITIAL_STATE:UserState={
    currentUser:null,
    isLoading:false,
    error:null
}

//NOTE :- our reducer in redux receive every single action that gets dispatched ever
export const userReducer=(state=INITIAL_STATE,action={} as AnyAction):UserState=>{
    
    if(signInSuccess.match(action)){
        return {...state,currentUser:action.payload}
    }

    if(signOutSuccess.match(action)){
        return {...state,currentUser:null}
    }

    if(signInFailed.match(action) || signUpFailed.match(action) || signOutFailed.match(action)){
        return {...state,error:action.payload};
    }

    return state;
    // const {type,payload}=action;

    // switch(type){
    //     case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
    //         return {
    //             ...state,
    //             currentUser:payload
    //         }

    //     case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
    //         return {
    //             ...state,
    //             currentUser:null
    //         }

    //     case USER_ACTION_TYPES.SIGN_OUT_FAILED:
    //     case USER_ACTION_TYPES.SIGN_IN_FAILED:
    //     case USER_ACTION_TYPES.SIGN_UP_FAILED:
    //         return {
    //             ...state,
    //             error:payload
    //         }

        
    //     // break;

    //     // case "increment":
    //     //     return {
    //     //         value: state.value+1,
    //     //     }
        
    //     default: //NOTE :- And when none of the action match or this reducer doesn't have any update we passes state as it is before 
    //         return state;
    //     // break;
    // }
}

