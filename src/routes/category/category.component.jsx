import { useContext,useEffect,useState,Fragment } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import ProductCard from "../../components/product-card/product-card.component";
import Spinner from "../../components/spinner/spinner.component";

import { selectCategoriesIsLoading, selectCategoriesMap } from "../../store/categories/category.selector";

import { CategoriesContext } from "../../contexts/categories.context";
import "./category.styles.scss";

const Category=()=>{
    const {category}=useParams();
    // const {categoriesMap}=useContext(CategoriesContext);
    console.log("render/re-rendering category component");
    const categoriesMap=useSelector(selectCategoriesMap);//first time it return {} object //useSelector function run when reducer update if selector function return value change and here every time it will return a brand new object but now here is some problem this category selector get run even when user object updated because root reducer combine all the objects but i want if i update user selector my category selector should not be updated and only category selector should be run or updated when categories object get updated in root-reducer so for that we going to use library called re Select inside of the redux ecosystem   
    const isLoading=useSelector(selectCategoriesIsLoading);
    const [products,setProducts]=useState(categoriesMap[category]);//here we derive categoriesMap[category] from {} so it will give undefine 

    console.log(categoriesMap,categoriesMap[category]);

    useEffect(()=>{
        console.log("effect fired calling setProducts");
        setProducts(categoriesMap[category]);//here we derive categoriesMap[category] from {} so it will give undefine
        console.log(products,categoriesMap[category]);
    },[category,categoriesMap]);

    return (
        <Fragment>
            <h2 className="category-title">
                {category.toLocaleUpperCase()}
            </h2>
            {
                isLoading
                ?(<Spinner/>)
                :(<div className="category-container">
                    
                    {products &&
                        products.map((product)=>{
                            return (
                                <ProductCard key={product.id} product={product}></ProductCard>
                            );
                        })
                    }
                </div>)
                
            }
            
        </Fragment>
    );
}

export default Category;