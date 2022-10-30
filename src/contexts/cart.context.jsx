import { createContext,useState,useEffect} from "react";

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
    isCartOpen:false,
    setIsCartOpen:()=>{},
    cartItems:[],
    addItemToCart:()=>{},
    removeItemToCart:()=>{},
    clearItemToCart:()=>{},
    cartCount:0,
    cartTotal:0
})

export const CartProvider=({children})=>{
    
    const [isCartOpen,setIsCartOpen]=useState(false);
    const [cartItems,setCartItems]=useState([]);
    const [cartCount,setCartCount]=useState(0);
    const [cartTotal,setCartTotal]=useState(0);

    useEffect(()=>{
        const newCartCount=cartItems.reduce((total,cartItem)=>total+cartItem.quantity,0)
        setCartCount(newCartCount);
    },[cartItems]);

    useEffect(()=>{
        const newCartTotal=cartItems.reduce((total,cartItem)=>total+cartItem.quantity*cartItem.price,0)
        setCartTotal(newCartTotal);
    },[cartItems]);

    const addItemToCart=(productToAdd)=>{
        setCartItems(addCartItem(cartItems,productToAdd));
    }

    const removeItemToCart=(productToRemove)=>{
        setCartItems(removeCartItem(cartItems,productToRemove));
    }

    const clearItemToCart=(productToClear)=>{
        setCartItems(clearCartItem(cartItems,productToClear));
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