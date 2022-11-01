import { useContext,useEffect,useState,Fragment } from "react";
import { useParams } from "react-router-dom";

import ProductCard from "../../components/product-card/product-card.component";

import { CategoriesContext } from "../../contexts/categories.context";
import "./category.styles.scss";

const Category=()=>{
    const {category}=useParams();
    const {categoriesMap}=useContext(CategoriesContext);
    const [products,setProducts]=useState(categoriesMap[category]);

    useEffect(()=>{
        setProducts(categoriesMap[category]);
    },[category,categoriesMap]);

    return (
        <Fragment>
            <h2 className="category-title">
                {category.toLocaleUpperCase()}
            </h2>
            <div className="category-container">
                
                {products &&
                    products.map((product)=>{
                        return (
                            <ProductCard key={product.id} product={product}></ProductCard>
                        );
                    })
                }
            </div>
        </Fragment>
    );
}

export default Category;