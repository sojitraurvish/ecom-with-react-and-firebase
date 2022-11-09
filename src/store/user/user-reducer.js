import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE={
    currentUser:null,
    isLoading:false,
    error:null
}

//NOTE :- our reducer in redux receive every single action that gets dispatched ever
export const userReducer=(state=INITIAL_STATE,action={})=>{
    const {type,payload}=action;

    switch(type){
        case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser:payload
            }

        case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser:null
            }

        case USER_ACTION_TYPES.SIGN_OUT_FAILED:
        case USER_ACTION_TYPES.SIGN_IN_FAILED:
        case USER_ACTION_TYPES.SIGN_UP_FAILED:
            return {
                ...state,
                error:payload
            }

        
        // break;

        // case "increment":
        //     return {
        //         value: state.value+1,
        //     }
        
        default: //NOTE :- And when none of the action match or this reducer doesn't have any update we passes state as it is before 
            return state;
        // break;
    }
}

