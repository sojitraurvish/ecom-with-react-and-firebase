import CategoryItem from '../category-item/category-item.component';
import "./directory.component.scss";

const Directory=(props)=>{
    const categories=props.categories;
    return (
        <div className='directory-container'>
        {categories.map((category)=>(
            <CategoryItem key={category.id} category={category}/>
        ))}
        
        </div>
    );
}

export default Directory;
