import { useState ,useEffect} from "react";
import { createContext } from "react"

import { addCollectionAndDocuments,getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

// import SHOP_DATA from  "../shop-data.js"

export const CategoriesContext = createContext({
    categoriesMap:{text:"jay"},
});

export const CategoriesProvider=({children})=>{
    const [categoriesMap,setCategoriesMap]=useState({});
    // console.log("o",categoriesMap);
    // useEffect(()=>{
    //     addCollectionAndDocuments("categories",SHOP_DATA);
    // });

    useEffect(()=>{
        const getCategoriesMap=async()=>{
            const categoryMap=await getCategoriesAndDocuments()//Note : here this is async operation ans when first time react render the application it execute all code in synchronous manor so this variable don't get data so while using that data you have to check that is that data in this variable then render the component see file category.component.jsx
            // console.log("ue",categoryMap);
            setCategoriesMap(categoryMap);
        }
        getCategoriesMap();
    },[]);

    const value={categoriesMap:categoriesMap};

    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}