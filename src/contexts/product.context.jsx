import { useState } from "react";
import { createContext } from "react"

import PRODUCT from  "../shop-data.json"

export const ProductsContext = createContext({
    products:[],
});

export const ProductsProvider=({children})=>{
    const [products,setProducts]=useState(PRODUCT);
    const value={products};

    return (
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )
}