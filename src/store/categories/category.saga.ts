// import {takeLatest,all,call,put} from "redux-saga/effects";//this are side effect genrator
import {takeLatest,all,call,put} from "typed-redux-saga/macro";//this are side effect genrator

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

import { fetchCategoriesSuccess,fetchCategoriesFailed } from "./category.action";

import { CATEGORIES_ACTION_TYPES } from "./category.types";

export function* fetchCategoriesAsync(){
    try{
        const categoriesArray=yield* call(getCategoriesAndDocuments);//when ever you want to turn function into effect you should use call function 
        yield* put(fetchCategoriesSuccess(categoriesArray));//put is generator option for dispatch
    }catch(error){
        yield* put(fetchCategoriesFailed(error as Error));
    }

}

export function* onFetchCategories(){
    yield* takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,fetchCategoriesAsync)
}//take Latest where we listen or receive action and Latest means if you here a bunch of same action give me the latest one


export function* categoriesSaga(){//this is generator function
    yield* all([call(onFetchCategories)])//all is effect run every thing and only complete when every thing done 
}