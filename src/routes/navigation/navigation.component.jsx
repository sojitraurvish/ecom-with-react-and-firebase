import { Fragment } from "react";//It it component that actually render noting when it get mounted on dom
import { Outlet,Link} from "react-router-dom";
import "./navigation.styles.scss";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

const Navigation=()=>{
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
            <Link className="nav-link" to="/auth"> {/*This Link tag use can use in browser router (see index.js) */}
              SIGN IN
            </Link>
          </div>
        </div>
        <Outlet/>{/* This is component and react (say or roles) that component must have parent, a top level parent containing component  */}
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
