import {createSelector} from "reselect";
import { CartState } from "./cart.reducer";
import { CartItem } from "./cart.types";

const selectCartReducer=(state):CartState=>state.cart;

export const selectCartItems=createSelector(
    [selectCartReducer],
    (cart)=>cart.cartItems
)

export const selectIsCartOpen=createSelector(
    [selectCartReducer],
    (cart)=>cart.isCartOpen
)

export const selectCartCount=createSelector(
    [selectCartItems],
    (cartItems)=>cartItems.reduce((total,cartItem)=>total+cartItem.quantity,0)
)

export const selectCartTotal=createSelector(
    [selectCartItems],
    (cartItems)=>cartItems.reduce((total,cartItem)=>total+cartItem.quantity*cartItem.price,0)
)

//Note - here in selectCartTotal is memorize selector and in it createSelector has two argument and when you call this function first it will call [selectCartItems] this method inside array and if it found any change with previous state than only it will run second argument function    

// Redux Persist
// Now another bandit we get from redux is actually the ability to persist inside localstorage and it's technically doable as well inside of context but you have to write your own code to do so
// whereas inside of redux there is a very popular library called redux persist what is essentially allows us to do, really persist, is persist any of our local state into local storage on the web browser,meaning that every browser has access to this little slice of memory 
// we can actually commit any state changes that the user has to that local storage so that when they come back to their session they cna actually re hydrate this with their previous STATES , which means the application , if done correctly , the  state of the application is reflected by redux so that technically we can actually persist their cart throughout their journey let's say they leave and they come back or they refresh if we refresh right now , what we notice is that our cart goes back to zero , but we can actually persist this using redux persist
// SUMUP -> when we refresh page so our cart value gone so we to persist that values into localstorage through library called 
//  
