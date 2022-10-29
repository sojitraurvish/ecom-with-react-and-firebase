import { async } from "@firebase/util";
import { useState,useContext } from "react";

import { createAuthUserWithEmailAndPassword,createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import { UserContext } from "../../contexts/user.context";

import "./sign-up-form.styles.scss";
import FormInput from "../form-input/from-input.component";
import Button from "../button/button.component";

const defaultFormFields={
    displayName:"",
    email:"",
    password:"",
    conformPassword:""
}
const SignUpForm=()=>{
    const [formFields,setFormFields]=useState(defaultFormFields);
    const {displayName,email,password,conformPassword}=formFields;

    const {setCurrentUser}=useContext(UserContext);

    const handleChange=(event)=>{
        const {name,value}=event.target;
        // console.log(event);
        setFormFields({...formFields,[name]:value});
        // console.log(formFields);
    }

    const resetFormFields=async ()=>{
        setFormFields(defaultFormFields);
    }

    const handleSubmit=async(event)=>{
        event.preventDefault();

        if(password !== conformPassword){
            alert("password do not match");
            return;
        }

        try{
            const {user}=await createAuthUserWithEmailAndPassword(email,password);
            
            // setCurrentUser(user); // this thing we have made automated in user.context.jsx file

            // await createUserDocumentFromAuth(user,{displayName}); // this thing we have made automated in user.context.jsx file
            resetFormFields();
        }catch(err){
            if(err.code==="auth/email-already-in-use"){
                alert("Cannot create user,email already in use");
            }
            console.log("User creation encountered an error",err);
        }
    }

    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                
                <FormInput label="Display Name :" type="text" onChange={handleChange} name="displayName" value={displayName} required/>
            
                <FormInput label="Email :" type="email" onChange={handleChange} name="email" value={email} required/>

                <FormInput label="Password :" type="password" onChange={handleChange} name="password" value={password} email required/>

                <FormInput label="Conform Password :" type="password" onChange={handleChange} name="conformPassword" value={conformPassword} required/>

                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    );
}

export default SignUpForm;