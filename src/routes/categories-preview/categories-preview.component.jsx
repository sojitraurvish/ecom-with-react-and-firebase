import {  useContext } from "react";
import { useSelector } from "react-redux";

import {selectCategoriesMap,selectCategoriesIsLoading} from "../../store/categories/category.selector"
import Spinner from "../../components/spinner/spinner.component";

import { CategoriesContext } from "../../contexts/categories.context";

import CategoryPreview from "../../components/category-preview/category-preview.component";
import "./categories-preview.styles.scss";

const CategoriesPreview=()=>{
    // const {categoriesMap}= useContext(CategoriesContext);
    const categoriesMap=useSelector(selectCategoriesMap);
    const isLoading=useSelector(selectCategoriesIsLoading);

    console.log(categoriesMap);
                
    return (
        <div className="shop-container">
            {
                isLoading
                ?(<Spinner/>)
                :(Object.keys(categoriesMap).map((title)=>{
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
                    
                }))
            }
        </div>
    );
}

export default CategoriesPreview;