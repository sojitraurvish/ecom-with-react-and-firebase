import { Fragment,useContext } from "react";
// Fragment - It it component that actually render noting when it get mounted on dom
// useContext - //----------User context
import { Outlet,Link} from "react-router-dom";
import "./navigation.styles.scss";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";//----------User context

import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation=()=>{
    const {
      currentUser,
      setCurrentUser
    }=useContext(UserContext);//----------User context
    // console.log(currentUser);

    const signOutHandler=async()=>{
      await signOutUser();
      setCurrentUser(null);
    }

    return (
      <Fragment>
        <div className="navigation">
          <Link className="logo-container" to="/">
            <CrwnLogo className="logo"/>
          </Link>
          <div className="nav-links-container">
            <Link className="nav-link" to="/shop"> {/*This Link tag use can use in browser router (see index.js) */}
              SHOP
            </Link>
            {
              currentUser ? (<span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>) 
                : (<Link className="nav-link" to="/auth"> {/*This Link tag use can use in browser router (see index.js) */}
                  SIGN IN
                </Link>)
            }
            
          </div>
        </div>
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
