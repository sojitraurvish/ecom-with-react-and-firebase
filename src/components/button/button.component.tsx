
import { FC,ButtonHTMLAttributes } from "react";
import {BaseButton,GoogleSignInButton,InvertedButton,ButtonSpinner} from "./button.styles";
/*
    default

    inverted

    google sign in
*/
export const enum BUTTON_TYPE_CLASSES{
    base="base",
    google="google-sign-in",
    inverted="inverted"
}

const getButton=(buttonType=BUTTON_TYPE_CLASSES.base):typeof BaseButton=>{
    return (
        {
            [BUTTON_TYPE_CLASSES["base"]]:BaseButton,
            [BUTTON_TYPE_CLASSES.google]:GoogleSignInButton,
            [BUTTON_TYPE_CLASSES.inverted]:InvertedButton,
        }[buttonType]
    );
}

export type ButtonProps={
    buttonType?:BUTTON_TYPE_CLASSES;
    isLoading?:boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>

// const Button:FC<ButtonProps>=({children,buttonType,isLoading,...otherProps}:ButtonProps)=>{
const Button:FC<ButtonProps>=({children,buttonType,isLoading,...otherProps})=>{
    //isLoading is not needed
    
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