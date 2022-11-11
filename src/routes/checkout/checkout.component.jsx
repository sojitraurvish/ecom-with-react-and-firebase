

import CheckoutItem from "../../components/checkout-item/checkout-item.component";


import "./checkout.styles.scss";

import { useSelector } from "react-redux";

import {selectCartItems,selectCartTotal} from "../../store/cart/cart.selector";

import PaymentForm from "../../components/payment-form/payment-form.component.jsx";

const Checkout=()=>{
    // const {cartItems,cartTotal,addItemToCart,removeItemToCart}=useContext(CartContext);
     
    const cartItems=useSelector(selectCartItems);
    const cartTotal=useSelector(selectCartTotal);
    
    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Total Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
        
            
                {   
                    cartItems.map((cartItem)=>{
                        const {id,name,quantity,price}=cartItem;
                        
                        return (
                            <CheckoutItem key={id} cartItem={cartItem}></CheckoutItem>
                        );
                    })
                }
           <span className="total">
                Total : ${cartTotal}
           </span>
           <PaymentForm/>
        </div>
    );
}

export default Checkout;