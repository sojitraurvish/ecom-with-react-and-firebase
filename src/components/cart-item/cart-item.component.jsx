import "./cart-item.styles.scss";

import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import { ReactComponent as Trash} from "../../assets/trash-can.svg";

const CartItem=(props)=>{

    const {name,price,quantity,imageUrl}=props.cartItem;

    const {clearItemToCart}=useContext(CartContext);

    const clearItemHandler=()=>clearItemToCart(props.cartItem);

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