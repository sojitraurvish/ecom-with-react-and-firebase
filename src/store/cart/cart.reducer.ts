import { CartItem, CART_ACTION_TYPE } from "./cart.types";

import { AnyAction } from "redux";
import { setCartItems,setIsCartOpen } from "./cart.action";

export type CartState={
    readonly cartItems:CartItem[],
    readonly isCartOpen:boolean
}

export const CART_INITIAL_STATE:CartState={
    cartItems:[],
    isCartOpen:false
}

// export const cartReducer=(state=CART_INITIAL_STATE,action={} as AnyAction):CartState =>{
export const cartReducer=(state=CART_INITIAL_STATE,action:AnyAction):CartState =>{
    
    if(setCartItems.match(action)){
        return {...state,cartItems:action.payload};
    }

    if(setIsCartOpen.match(action)){
        return {...state,isCartOpen:action.payload};
    }

    return state;

    // const {type,payload}=action;

    // switch(type){
    //     case CART_ACTION_TYPE.SET_CART_ITEMS:
    //         return{
    //             ...state,
    //             cartItems:payload
    //         }
    //     case CART_ACTION_TYPE.SET_IS_CART_OPEN:
    //         return{
    //             ...state,
    //             isCartOpen:payload
    //         }

    //     default:
    //         return state;
    // }
}