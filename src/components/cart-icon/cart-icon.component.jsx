import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import { useDispatch,useSelector } from "react-redux";

import {selectCartCount,selectIsCartOpen} from "../../store/cart/cart.selector";
import {setIsCartOpen} from "../../store/cart/cart.action";


import {ShoppingIcon,CartIconContainer,ItemCount} from "./cart-icon.styles";

const CartIcon=()=>{

    // const {isCartOpen,setIsCartOpen,cartCount}=useContext(CartContext);
    const dispatch=useDispatch();

    const cartCount=useSelector(selectCartCount);
    const isCartOpen=useSelector(selectIsCartOpen);

    const toggleIsCartOpen =()=>{
        return dispatch(setIsCartOpen(!isCartOpen));
    };

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon className="shopping-icon" />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    );
}

export default CartIcon; 