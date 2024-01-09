// import { compose, createStore, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit'; // this configureStore will take place of createStore and applyMiddleware
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
  Boolean
);

// const composeEnhancer =
//   (process.env.NODE_ENV !== 'production' &&
//     window &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

// const persistConfig = {
//   key: 'root',
//   storage,
//   blacklist: ['user'],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

//(

// now redux tool kit includes three middleware by default
// one of them is redux thunk so redux toolkit by default ships wit redux thunk
export const store1 = configureStore({
  reducer: rootReducer,
  middleware:[logger] // if here you dont pass anything(our own middleware) then and only it use by default middleware and it is redux thunk
})
// now here the second by default middleware is siralizer that say that when you try to store value that are non siralize value(string number or js object)-> (mean js constractor then error) than i will through error 
// here two ways we can ignore it or disabled it
// if we pass arrry of middleware or own than it override all of the default middleware like [logger]
// but we do want pass middleware and do not want do override of ridux than write like bellow

// 3rd one has immutablility check mean with selecter fatch value you can not modify it
//)

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware/*old all midderware thunk...,..*/) =>
    getDefaultMiddleware(/*{}*/
     /*{
      serializableCheck:false,// now it will not check for serialize and if you want to ignore stroing constractor that firebase onject give us then go to file app.js pickedUser 
     }*/
    ).concat(middleWares),
    //*{}* here we can pass object to overide default configrations
  }); 

// export const persistor = persistStore(store);
