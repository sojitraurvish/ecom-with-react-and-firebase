import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./checkout-item.styles.scss";

const CheckoutItem=(props)=>{
    const {name,imageUrl,price,quantity}=props.cartItem;

    const {addItemToCart,removeItemToCart,clearItemToCart}=useContext(CartContext);

    const clearItemHandler=()=>clearItemToCart(props.cartItem);
    const addItemHandler=()=>addItemToCart(props.cartItem);
    const removeItemHandler=()=>removeItemToCart(props.cartItem);

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