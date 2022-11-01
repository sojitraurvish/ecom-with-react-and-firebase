import {BackgroundImage,Body,DirectoryItemContainer} from "./directory-item.style";

import {useNavigate} from "react-router-dom";

const DirectoryItem=(props)=>{
    const {imageUrl,title,route}=props.category;
    const navigate=useNavigate();

    const onNavigateHandler=()=>navigate(route);
    return (
        <DirectoryItemContainer onClick={onNavigateHandler}>
            <BackgroundImage 
                imageUrl={imageUrl}
                // style={{
                //     backgroundImage:`url(${imageUrl})`
                // }}
            />
            <Body>
            <h2>{title}</h2>
            <p>Shop Now</p>
            </Body>  
        </DirectoryItemContainer>
    );
}
  
export default DirectoryItem;