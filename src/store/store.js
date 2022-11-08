import {compose,createStore,applyMiddleware} from "redux"; 
import logger from 'redux-logger'
import {persistStore,persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";// this use localstorage

import {loggerMiddleware} from "./middleware/logger";

import { rootReducer } from "./root-reducer";


const persistConfig={
    key:"root",//root meant i want to persist hole thing 
    storage,// this is local storage
    blacklist:["user"]// name of reducer which we don't want to store  
}

const persistedReducer=persistReducer(persistConfig,rootReducer);//here we have created persistedReducer which we want to use for our store

const middleWares=[/*logger,*/process.env.NODE_ENV!=="production" && loggerMiddleware].filter(Boolean);//for this see pic 210 inside middleware



const composedEnhancer=(process.env.NODE_ENV!=="production" && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)||compose

const composedEnhancers=composedEnhancer(applyMiddleware(...middleWares));
// const composedEnhancers=compose(applyMiddleware(...middleWares));

// compose() it's essentially a way for use to pass multiple functions left to right   

// export const store=createStore(rootReducer,undefined,composedEnhancers);
export const store=createStore(persistedReducer,undefined,composedEnhancers);//we want to use persistedReducer for our store


export const persistor=persistStore(store);