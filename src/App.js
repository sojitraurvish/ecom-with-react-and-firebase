// import logo from './logo.svg';
import './App.css';
import "./categories.styles.scss";

import {Routes,Route} from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';

const App=()=> {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
          <Route index /*index={true}*/ /*path="home"/>*/ element={<Home/>}/>
          <Route path='shop' element={<Shop/>}/>
          <Route path='auth' element={<Authentication/>}/>
      </Route>
    </Routes>
  );
}

export default App;
