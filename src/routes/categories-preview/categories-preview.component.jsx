import {  useContext } from "react";

import { CategoriesContext } from "../../contexts/categories.context";

import CategoryPreview from "../../components/category-preview/category-preview.component";
import "./categories-preview.styles.scss";

const CategoriesPreview=()=>{
    const {categoriesMap}= useContext(CategoriesContext);

    console.log(categoriesMap);
                
    return (
        <div className="shop-container">
            {
                Object.keys(categoriesMap).map((title)=>{
                    const products=categoriesMap[title];
                    return (

                        <CategoryPreview key={title} title={title} products={products}></CategoryPreview>

                        // <Fragment key={title}>
                        //     <h2>{title}</h2>
                        //     <div className="products-container">
                        //         {
                        //             categoriesMap[title].map((product)=>{
                        //                 return (
                        //                     // <div key={product.id}>
                        //                     //     <h1>{product.name}</h1>
                        //                     // </div>

                        //                     <ProductCard key={product.id} product={product}/>
                        //                 );
                        //             })
                        //         }
                        //     </div>
                        // </Fragment>
                    );
                    
                })
            }
        </div>
    );
}

export default CategoriesPreview;