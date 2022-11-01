import { Link } from "react-router-dom";
import "./category-preview.styles.scss";

import ProductCard from "../product-card/product-card.component";

const CategoryPreview=(props)=>{
    const {title,products}=props;
    return (
        <div className="category-preview-container">
            <h2>
                <Link className="title" to={title}>{title.toUpperCase()}</Link>
            </h2>
            <div className="preview">
                {
                    products
                    .filter((_,index)=>{
                        return index < 4;
                    })
                    .map((product)=>{
                        return (
                            <ProductCard key={product.id} product={product}></ProductCard>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default CategoryPreview;

