import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./checkout-item.styles.scss";

import { useDispatch,useSelector } from "react-redux";

import {addItemToCart,removeItemToCart,clearItemToCart} from "../../store/cart/cart.action";
import {selectCartItems} from "../../store/cart/cart.selector";

const CheckoutItem=(props)=>{
    const {name,imageUrl,price,quantity}=props.cartItem;

    // const {addItemToCart,removeItemToCart,clearItemToCart}=useContext(CartContext);
    const cartItems=useSelector(selectCartItems);

    const dispatch=useDispatch();
    const clearItemHandler=()=>dispatch(clearItemToCart(cartItems,props.cartItem));
    const addItemHandler=()=>dispatch(addItemToCart(cartItems,props.cartItem));
    const removeItemHandler=()=>dispatch(removeItemToCart(cartItems,props.cartItem));

    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={removeItemHandler}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={addItemHandler}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <span className="price">{`$${price * quantity}`}</span>
            <div className="remove-button" onClick={clearItemHandler}>&#10005;</div>
        </div>
    );
}

export default CheckoutItem;