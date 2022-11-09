import { useState,useEffect } from "react";
import {  Routes,Route } from "react-router-dom";
import {useDispatch} from "react-redux";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { CategoriesProvider } from "../../contexts/categories.context";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

import {setCategories} from "../../store/categories/category.action"
import { fetchCategoriesAsync } from "../../store/categories/category.action";

const Shop=()=>{ 

    const dispatch=useDispatch();

    useEffect(()=>{
            // console.log(categoriesArray);
            dispatch(fetchCategoriesAsync());
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