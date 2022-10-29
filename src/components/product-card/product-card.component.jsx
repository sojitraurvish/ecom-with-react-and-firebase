import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./product-card.styles.scss";

import Button from "../button/button.component";

const ProductCard=(props)=>{
    const {id,name,price,imageUrl}=props.product;
    
    const {addItemToCart}=useContext(CartContext); 

    const addProductToCart=()=>addItemToCart(props.product);

    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`}/>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType="inverted" onClick={addProductToCart} >Add to cart </Button>
        </div>
    );
}

export default ProductCard ;