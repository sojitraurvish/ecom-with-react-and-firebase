import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPE } from "./cart.types";

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

export const setIsCartOpen=(boolean)=>{
    return createAction(CART_ACTION_TYPE.SET_IS_CART_OPEN,boolean);
}

export const addItemToCart=(cartItems,productToAdd)=>{
    const newCartItems=addCartItem(cartItems,productToAdd);
    return createAction(CART_ACTION_TYPE.SET_CART_ITEMS,newCartItems) 
}

export const removeItemToCart=(cartItems,productToRemove)=>{
    const newCartItems=removeCartItem(cartItems,productToRemove);
    return createAction(CART_ACTION_TYPE.SET_CART_ITEMS,newCartItems) 
}

export const clearItemToCart=(cartItems,productToClear)=>{
    const newCartItems=clearCartItem(cartItems,productToClear);
    return createAction(CART_ACTION_TYPE.SET_CART_ITEMS,newCartItems) 
} 