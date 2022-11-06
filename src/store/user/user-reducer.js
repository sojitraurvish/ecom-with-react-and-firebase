import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE={
    currentUser:null
}

//NOTE :- our reducer in redux receive every single action that gets dispatched ever
export const userReducer=(state=INITIAL_STATE,action={})=>{
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
        
        default: //NOTE :- And when none of the action match or this reducer doesn't have any update we passes state as it is before 
            return state;
        // break;
    }
}

