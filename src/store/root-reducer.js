import {combineReducers} from "redux";//combineReducer is used to combining reducer into root reducer

import { userReducer } from "./user/user-reducer";
import { categoriesReducer } from "./categories/category.reducer";

export const rootReducer=combineReducers({
    user:userReducer,
    categories:categoriesReducer
})


/**
 * Note :- In case of context reducer get fire when the action match for particular reducer 
 * 
 * But here in redux we are creating root reducer from all reducer like (user-reducer,cart-reducer)
 * so when user value updated here action get fire for all reducer like (user-reducer,cart-reducer)
 * but action will be specific to one reducer not to all reducer so for all other we return old state in default case
 * 
 * and once create root reducer then we will bring it into store
 */