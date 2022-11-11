
import {BaseButton,GoogleSignInButton,InvertedButton,ButtonSpinner} from "./button.styles";
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
    //isLoading is not needed
    const {children,buttonType,isLoading,...otherProps}=props;
    
    const CustomButton=getButton(buttonType);
    console.log({...otherProps});
    console.log(isLoading);
    return (
        <CustomButton disabled={isLoading} {...otherProps}>
            {isLoading ? <ButtonSpinner/> : children}
        </CustomButton>
        // <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}>
        //     {children}
        // </button>
    )
}

export default Button;