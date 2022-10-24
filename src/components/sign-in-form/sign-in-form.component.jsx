import { async } from "@firebase/util";
import { useState } from "react";

import { createAuthUserWithEmailAndPassword,createUserDocumentFromAuth,signInWithGooglePopup,signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

import "./sign-in-form.styles.scss";
import FormInput from "../form-input/from-input.component";
import Button from "../button/button.component";

const defaultFormFields={
    email:"",
    password:"",
}
const SignInForm=()=>{
    const [formFields,setFormFields]=useState(defaultFormFields);
    const {email,password}=formFields;

    const handleChange=(event)=>{
        const {name,value}=event.target;
        // console.log(event);
        setFormFields({...formFields,[name]:value});
        // console.log(formFields);
    }

    const resetFormFields=async ()=>{
        setFormFields(defaultFormFields);
    }

    const logGoogleUser=async()=>{
        const {user}=await signInWithGooglePopup();
        // console.log(user);
        
        await createUserDocumentFromAuth(user);
        // console.log(userDocRef);
    }

    const handleSubmit=async(event)=>{
        event.preventDefault();


        try{
            const res=await signInAuthUserWithEmailAndPassword(email,password);
            // console.log(res);
            resetFormFields();
        }catch(err){
            switch(err.code){
                
                case "auth/wrong-password":
                    alert("incorrect password for email");
                break;

                case "auth/user-not-found":
                    alert("no user associated with this email");
                break;

                default:
                    console.log(err);
                    
            }
             
        }
    }

    return (
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                
                <FormInput label="Email :" type="email" onChange={handleChange} name="email" value={email} required/>

                <FormInput label="Password :" type="password" onChange={handleChange} name="password" value={password} email required/>
                <div className="buttons-container">

                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType="google" onClick={signInWithGooglePopup}>Google Sign In</Button>
                </div>
            </form>
        </div>
    );
}

export default SignInForm;