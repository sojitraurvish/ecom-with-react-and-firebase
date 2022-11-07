import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./product-card.styles.scss";

import Button,{BUTTON_TYPE_CLASSES} from "../button/button.component";

import {useDispatch} from "react-redux"
import { addItemToCart } from "../../store/cart/cart.action";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

const ProductCard=(props)=>{
    const {id,name,price,imageUrl}=props.product;
    
    // const {addItemToCart}=useContext(CartContext); 
    
    const cartItems=useSelector(selectCartItems);

    const dispatch=useDispatch();
    const addProductToCart=()=> dispatch(addItemToCart(cartItems,props.product));
    console.log(props.product)

    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`}/>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart} >Add to cart </Button>
        </div>
    );
}

export default ProductCard ;