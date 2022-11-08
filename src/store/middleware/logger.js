export const loggerMiddleware=(store)=>(next)=>(action)=>{
    if(!action.type){
        return next(action);
    }
    console.log("type: ",action.type);
    console.log("action:",action.payload);
    console.log("currentState: ",store.getState());

    //we can only get new state when our reducer get updated
    next(action);//this we pass action to reducer and update them

    console.log("next state: ",store.getState());
}