import { Fragment,useContext } from "react";
// Fragment - It it component that actually render noting when it get mounted on dom
// useContext - //----------User context
import { Outlet,Link} from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";

import {selectIsCartOpen} from "../../store/cart/cart.selector";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { CartContext } from "../../contexts/cart.context";
import { selectCurrentUser } from "../../store/user/user-selector";

import { signOutUser } from "../../utils/firebase/firebase.utils";
import { signOutStart } from "../../store/user/user.action";


import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer
} from "./navigation.styles";

const Navigation=()=>{
    
    const dispatch=useDispatch();
    const currentUser=useSelector(selectCurrentUser);
    // console.log(currentUser);

    // const {isCartOpen}=useContext(CartContext);
    const isCartOpen=useSelector(selectIsCartOpen);

    const signOutUser=()=>dispatch(signOutStart());
    // const signOutHandler=async()=>{
    //   await signOutUser();
    //   // setCurrentUser(null);
    // }

    return (
      <Fragment>
        <NavigationContainer>
          <LogoContainer to="/">
            <CrwnLogo className="logo"/>
          </LogoContainer>

          <NavLinks>
            <NavLink to="/shop"> {/*This Link tag use can use in browser router (see index.js) */}
              SHOP
            </NavLink>
            {
              currentUser ? (<NavLink as="span" onClick={signOutUser}>SIGN OUT</NavLink>) 
                : (<NavLink to="/auth"> {/*This Link tag use can use in browser router (see index.js) */}
                  SIGN IN
                </NavLink>)
            }
            <CartIcon/>
            
          </NavLinks>
          {
            isCartOpen && <CartDropdown/>
          }
        </NavigationContainer>
        <Outlet/>{/* This is component and react (say or roles) that component must have parent, a top level parent containing component  */} {/*This Outlet tag use can use in browser router (see index.js) */}
      </Fragment>/* Fragment is useful if you don't actually want to render some specific html Fragment mean don't do any thing and use of fragment is just wrap our <Outlet/> component rather than div because div represent div element and <Fragment> represent nothing*/
    );
}


export default Navigation;

// const Navigation=()=>{
//     return (
//       <div>
//         <div>
//           <h1>I am navigation bar</h1>
//         </div>
//         <Outlet/>
//       </div>
//     );
// }
