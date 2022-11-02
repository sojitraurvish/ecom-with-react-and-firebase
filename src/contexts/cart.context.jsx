import { useReducer } from "react";
import { createContext,useState,useEffect} from "react";

import { createAction } from "../utils/reducer/reducer.utils";

const addCartItem=(cartItems,productToAdd)=>{
    // Find if cartItems contains productToAdd
    const existingCartItem=cartItems.find(
        (cartItem)=>cartItem.id===productToAdd.id
        );

    // If found, increment quantity
    if(existingCartItem){
        return cartItems.map((cartItem)=>
            cartItem.id===productToAdd.id
            ?{...cartItem,quantity:cartItem.quantity+1}
            :cartItem
        )
    }

    // Return new array with modified cartItems/ new cart item
    return [...cartItems,{...productToAdd,quantity:1}];
}

const removeCartItem=(cartItems,productToRemove)=>{
    // Find if cartItems contains productToAdd
    const existingCartItem=cartItems.find(
        (cartItem)=>cartItem.id===productToRemove.id
        );

    // If found, increment quantity
    if(existingCartItem.quantity<=1){
        return cartItems.filter(cartItem => cartItem.id !== productToRemove.id);
    }

    // If found, increment quantity
    if(existingCartItem){
        return cartItems.map((cartItem)=>
            cartItem.id===productToRemove.id
            ?{...cartItem,quantity:cartItem.quantity-1}
            :cartItem
        )
    }

    // // Find if cartItems contains productToAdd
    // const existingCartItemIndex=cartItems.findIndex(
    //     (cartItem)=>cartItem.id===productToRemove.id
    //     );

    // // If found, increment quantity
    // if(existingCartItemIndex){
        
    //     return cartItems.map((cartItem)=>{
    //         if(cartItem.id===productToRemove.id){
    //             // If Quantity is 0 than remove item from array 
    //             if(cartItem.quantity<1){
    //                 return cartItem.splice(existingCartItemIndex,1);
    //             }
    //             return {...cartItem,quantity:cartItem.quantity-1}
    //         }
           
    //         return cartItem;
    //     })
    // }

}

const clearCartItem=(cartItems,cartItemToClear)=>{
        return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);
}

export const CartContext=createContext({
    iCartOpen:false,
    setIsCartOpen:()=>{},
    cartItems:[],
    addItemToCart:()=>{},
    removeItemToCart:()=>{},
    clearItemToCart:()=>{},
    cartCount:0,
    cartTotal:0
})

const CART_ACTION_TYPE={
    SET_CART_ITEMS:"SET_CART_ITEMS",
    SET_IS_CART_OPEN:"SET_IS_CART_OPEN"
} 

const INITIAL_STATE={
    cartItems:[],
    cartCount:0,
    cartTotal:0,
    isCartOpen:false
}

const cartReducer=(state,action)=>{
    const {type,payload}=action;

    switch(type){
        case CART_ACTION_TYPE.SET_CART_ITEMS:
            return{
                ...state,
                ...payload
            }
        case CART_ACTION_TYPE.SET_IS_CART_OPEN:
            return{
                ...state,
                isCartOpen:payload
            }

        default:
            throw new Error(`unhandled type of ${type} in cartReducer`);
    }
}

export const CartProvider=({children})=>{

    const [state,dispatch]=useReducer(cartReducer,INITIAL_STATE);
    const {cartItems,isCartOpen,cartCount,cartTotal}=state;
    

    const updateCartItemsReducer=(newCartItems)=>{
        const newCartCount=newCartItems.reduce((total,cartItem)=>total+cartItem.quantity,0)
        const newCartTotal=newCartItems.reduce((total,cartItem)=>total+cartItem.quantity*cartItem.price,0)
       
        // dispatch({type:CART_ACTION_TYPE.SET_CART_ITEMS,payload:{cartItems:newCartItems,cartTotal:newCartTotal,cartCount:newCartCount}})
        dispatch(createAction(CART_ACTION_TYPE.SET_CART_ITEMS,{
                cartItems:newCartItems,
                cartTotal:newCartTotal,
                cartCount:newCartCount
            })
        );
        /**
         * generate newCartTotal
         * 
         * 
         * generate newCartCount 
         * 
         * 
         * dispatch new action with payload={
         * newCartItems,
         * newCartTotal,
         * newCartCount
         * }
         */
    }

    const addItemToCart=(productToAdd)=>{
        const newCartItems=addCartItem(cartItems,productToAdd);
        updateCartItemsReducer(newCartItems);
    }

    const removeItemToCart=(productToRemove)=>{
        const newCartItems=removeCartItem(cartItems,productToRemove);
        updateCartItemsReducer(newCartItems);
    }

    const clearItemToCart=(productToClear)=>{
        const newCartItems=clearCartItem(cartItems,productToClear);
        updateCartItemsReducer(newCartItems);
    }

    const setIsCartOpen=(bool)=>{
        dispatch(createAction(CART_ACTION_TYPE.SET_IS_CART_OPEN,bool));
    }

    const value={
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemToCart,
        cartCount,
        removeItemToCart,
        clearItemToCart,
        cartTotal
    };
    
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
}