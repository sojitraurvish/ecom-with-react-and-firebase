
import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "./category.types";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

// export const setCategories=(categoriesArray)=>{
//     return createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES,categoriesArray);
// }

export const fetchCategoriesStart=()=>createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess=(categoriesArray)=>createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,categoriesArray);

export const fetchCategoriesFailed=(error)=>createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,error);


//to understand this function goto file logger.js
// const thunkMiddleware=(store)=>(next)=>(action)=>{
//     if(typeof(action)==='function'){
//         action(dispatch);
//     }
// }