
import {BaseButton,GoogleSignInButton,InvertedButton} from "./button.styles";
/*
    default

    inverted

    google sign in
*/
export const BUTTON_TYPE_CLASSES={
    base:"base",
    google:"google-sign-in",
    inverted:"inverted"
}

const getButton=(buttonType=BUTTON_TYPE_CLASSES.base)=>{
    return (
        {
            [BUTTON_TYPE_CLASSES["base"]]:BaseButton,
            [BUTTON_TYPE_CLASSES.google]:GoogleSignInButton,
            [BUTTON_TYPE_CLASSES.inverted]:InvertedButton,
        }[buttonType]
    );
}

const Button=(props)=>{

    const {children,buttonType,...otherProps}=props;
    
    const CustomButton=getButton(buttonType);
  
    return (
        <CustomButton {...otherProps}>
            {children}
        </CustomButton>
        // <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}>
        //     {children}
        // </button>
    )
}

export default Button;