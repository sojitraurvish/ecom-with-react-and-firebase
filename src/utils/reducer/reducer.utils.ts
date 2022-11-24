import {AnyAction} from "redux";

type Matchable<AC extends ()=> AnyAction>=AC & {
    type:ReturnType<AC>['type'];
    match(action:AnyAction):action is ReturnType<AC>;
}

export function withMatcher<AC extends ()=> AnyAction & {type:string}>(actionCreator:AC):Matchable<AC>;
export function withMatcher<AC extends (...args:any[])=> AnyAction & {type:string}>(actionCreator:AC):Matchable<AC>;

export function withMatcher(actionCreator:Function){
    const type=actionCreator().type;
    return Object.assign(actionCreator,{
        type,
        match(action:AnyAction){
            return action.type===type;
        }
    })
}

export type Action<T>={
    type:T
}

export type ActionWithPayload<T,P>={
    type:T,
    payload:P
}

export function createAction<T extends string>(type:T,payload:void):Action<T>;

export function createAction<T extends string,P>(type:T,payload:P):ActionWithPayload<T,P>; 

export function createAction<T,P>(type:T,payload:P){ 
    return {type,payload};
}


// export const createAction=(type,payload)=>{ 
//     return ({type,payload});
// }

// type Action<T,>={
//     type:T
// }

// type ActionType<T>=Action<T> & {
//     [extraProps: string]:any
// }