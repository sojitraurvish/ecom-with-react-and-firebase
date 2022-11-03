import {CartDropdownContainer,EmptyMessage,CartItems} from "./cart-dropdown.styles";

import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/cart.context";
import { CategoriesContext } from "../../contexts/categories.context";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown=()=>{

    const {cartItems}=useContext(CartContext);
    const {categoriesMap}=useContext(CategoriesContext);
    console.log(categoriesMap);
    const navigate=useNavigate();

    const goToCheckoutHandler=()=>{
        navigate("/checkout");
    }

    return (
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.length 
                    ? (cartItems.map((item)=>{
                        return (
                            <CartItem key={item.id} cartItem={item}/>
                        );
                    }))
                    : (
                        <EmptyMessage>Your cart is empty</EmptyMessage>
                    )
                }
            </CartItems>
            <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    );
}

export default CartDropdown;