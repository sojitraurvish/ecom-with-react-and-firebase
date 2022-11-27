import { Middleware } from "redux";

import { RootState } from "../store";

export const loggerMiddleware:Middleware<{},RootState>=(store)=>(next)=>(action)=>{
    if(!action.type){
        return next(action); // -> this action passes to the thunkMiddleware And if action do'nt have type that mean it is function
    }
    console.log("type: ",action.type);
    console.log("action:",action.payload);
    console.log("currentState: ",store.getState());

    //we can only get new state when our reducer get updated
    next(action);//this we pass action to reducer and update them

    console.log("next state: ",store.getState());
}


// const thunkMiddleware=(store)=>(next)=>(action)=>{
//     if(typeof(action)==='function'){
//         action(dispatch);
//     }
// }
