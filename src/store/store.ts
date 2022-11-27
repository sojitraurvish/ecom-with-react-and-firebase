import {compose,createStore,applyMiddleware,Middleware} from "redux"; 
import logger from 'redux-logger';
import {persistStore,persistReducer,PersistConfig} from "redux-persist";
import storage from "redux-persist/lib/storage";// this use localstorage


import {loggerMiddleware} from "./middleware/logger";

import { rootReducer } from "./root-reducer";

// import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

import { rootSaga } from "./root-saga";

export type RootState=ReturnType<typeof rootReducer>//rootReducer is function that exists inside java script not in typescript 



export type ExtendedPersistConfig=PersistConfig<RootState> & {
    whitelist:(keyof RootState)[]
}

const persistConfig:ExtendedPersistConfig={
    key:"root",//root meant i want to persist hole thing 
    storage,// this is local storage
    // blacklist:["user"]// name of reducer which we don't want to store  
    whitelist:["cart"]// name of reducer which we don't want to store  
}

const sagaMiddleware=createSagaMiddleware();

const persistedReducer=persistReducer(persistConfig,rootReducer);//here we have created persistedReducer which we want to use for our store

const middleWares=[
    /*logger,*/process.env.NODE_ENV!=="production" && loggerMiddleware,
    // thunk
    sagaMiddleware
].filter((middleware): middleware is Middleware => Boolean(middleware));//for this see pic 210 inside middleware

declare global{
    interface Window{
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composedEnhancer=
    (process.env.NODE_ENV!=="production" && 
    window && 
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__//Property '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__' does not exist on type 'Window & typeof globalThis
    )||compose

const composedEnhancers=composedEnhancer(applyMiddleware(...middleWares));
// const composedEnhancers=compose(applyMiddleware(...middleWares));

// compose() it's essentially a way for use to pass multiple functions left to right   

// export const store=createStore(rootReducer,undefined,composedEnhancers);
export const store=createStore(persistedReducer,undefined,composedEnhancers);//we want to use persistedReducer for our store

sagaMiddleware.run(rootSaga);

export const persistor=persistStore(store);