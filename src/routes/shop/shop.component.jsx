import {  Routes,Route } from "react-router-dom";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { CategoriesProvider } from "../../contexts/categories.context";

const Shop=()=>{
                
    return (
        <CategoriesProvider>
            <Routes>
                <Route index element={<CategoriesPreview/>}></Route>
                <Route path=":category" element={<Category/>}></Route>
            </Routes>
        </CategoriesProvider>

    );
}

export default Shop;