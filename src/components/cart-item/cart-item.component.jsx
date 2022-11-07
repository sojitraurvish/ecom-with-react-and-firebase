import "./cart-item.styles.scss";

import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import { ReactComponent as Trash} from "../../assets/trash-can.svg";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {clearItemToCart} from "../../store/cart/cart.action"
import {selectCartItems} from "../../store/cart/cart.selector"

const CartItem=(props)=>{

    const {name,price,quantity,imageUrl}=props.cartItem;

    const cartItems=useSelector(selectCartItems);

    const dispatch=useDispatch();
    const clearItemHandler=()=>dispatch(clearItemToCart(cartItems,props.cartItem));

    return (
        <div className="cart-item-container">
            <img src={imageUrl} alt={`${name}`} />
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">{quantity} x ${price}</span>
            </div>
            <div className="trash-div">
                <Trash className="trash" onClick={clearItemHandler}/>
            </div>
        </div>
    );
}

export default CartItem;