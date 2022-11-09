// import logo from './logo.svg';
import './App.css';
import "./categories.styles.scss";

import {Routes,Route} from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';

import {useEffect} from "react";
import { setCurrentUser } from './store/user/user.action';
import { createUserDocumentFromAuth,getCurrentUser, onAuthStateChangedListener, signOutUser } from "./utils/firebase/firebase.utils";
import { useDispatch } from 'react-redux';
import { checkUserSession } from './store/user/user.action';

const App=()=> {

  const dispatch=useDispatch();
  useEffect(()=>{
    // const unsubscribe=onAuthStateChangedListener((user)=>{
    //   console.log("useEffect App");  

    // if(user){
    //     createUserDocumentFromAuth(user);
    // }
    //   dispatch(setCurrentUser(user));
    // }) 

    // return unsubscribe
    // getCurrentUser().then((user)=>console.log(user));
    dispatch(checkUserSession());
  },[]);

  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
          <Route index /*index={true}*/ /*path="home"/>*/ element={<Home/>}/>
          <Route path='shop/*' element={<Shop/>}/>
          <Route path='auth' element={<Authentication/>}/>
          <Route path='checkout' element={<Checkout/>}/>
      </Route>
    </Routes>
  );
}

export default App;
