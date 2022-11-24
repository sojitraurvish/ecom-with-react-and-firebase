
import { createAction,Action,ActionWithPayload,withMatcher } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES,Category } from "./category.types";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";


// export const setCategories=(categoriesArray)=>{
//     return createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES,categoriesArray);
// }


export type FetchCategoriesStart=Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>;

export type FetchCategoriesSuccess=ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,Category[]>;

export type FetchCategoriesFailed=ActionWithPayload<CATEGORIES_ACTION_TYPES,Error>

export type CategoryAction= 
    FetchCategoriesStart 
    | FetchCategoriesSuccess 
    | FetchCategoriesFailed ;

export const fetchCategoriesStart=withMatcher(():FetchCategoriesStart=>createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START));

export const fetchCategoriesSuccess=withMatcher((categoriesArray:Category[]):FetchCategoriesSuccess=>createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,categoriesArray));

export const fetchCategoriesFailed=withMatcher((error:Error):FetchCategoriesFailed=>createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,error));


//to understand this function goto file logger.js
// const thunkMiddleware=(store)=>(next)=>(action)=>{
//     if(typeof(action)==='function'){
//         action(dispatch);
//     }
// }