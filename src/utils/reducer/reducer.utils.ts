import { AnyAction } from "redux";

// export type ActionWithPayload<T,P>={
//     type:T;
//     payload:P;
// }

// export type Action<T>={
//     type:T
// }

export const createAction=(type,payload)=>{ 
    return ({type,payload});
}

// type Action<T,>={
//     type:T
// }

// type ActionType<T>=Action<T> & {
//     [extraProps: string]:any
// }