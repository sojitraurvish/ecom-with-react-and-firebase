// import logo from './logo.svg';
import './App.css';
import "./categories.styles.scss";

import {Routes,Route} from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/sign-in/sign-in.component';

const Shop=()=>{
  return (<div><h1>I am the shop page</h1></div>);
}

const App=()=> {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
          <Route index /*index={true}*/ /*path="home"/>*/ element={<Home/>}/>
          <Route path='shop' element={<Shop/>}/>
          <Route path='sign-in' element={<SignIn/>}/>
      </Route>
    </Routes>
  );
}

export default App;
