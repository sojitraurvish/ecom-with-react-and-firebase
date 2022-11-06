import { useState,useEffect } from "react";
import {  Routes,Route } from "react-router-dom";
import {useDispatch} from "react-redux";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { CategoriesProvider } from "../../contexts/categories.context";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

import {setCategories} from "../../store/categories/category.action"

const Shop=()=>{ 

    const dispatch=useDispatch();

    useEffect(()=>{
        const getCategoriesMap=async()=>{
            const categoriesArray=await getCategoriesAndDocuments()//Note : here this is async operation ans when first time react render the application it execute all code in synchronous manor so this variable don't get data so while using that data you have to check that is that data in this variable then render the component see file category.component.jsx
            console.log("shop");
            // console.log(categoriesArray);
            dispatch(setCategories(categoriesArray));
        }
        getCategoriesMap();
    },[]);

    return (
        // <CategoriesProvider>
            <Routes>
                <Route index element={<CategoriesPreview/>}></Route>
                <Route path=":category" element={<Category/>}></Route>
            </Routes>
        // </CategoriesProvider>

    );
}

export default Shop;