import { useEffect } from "react";
import {getRedirectResult} from "firebase/auth";
import {auth,signInWithGooglePopup,createUserDocumentFromAuth,signInWithGoogleRedirect} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn=()=>{

    // useEffect(()=>{
    //     (async ()=>{
    //     const user=await getRedirectResult(auth);//here why we use useEffect hook? because in case of get redirect our page get redirected so this way again we can get result
    //     console.log(user);
    //     if(user){
    //         const userDocRef=await createUserDocumentFromAuth(user);
    //         console.log(userDocRef);
    //     }
    //     })();
    // });

    const logGoogleUser=async()=>{
        const {user}=await signInWithGooglePopup();
        // console.log(user);
        
        const userDocRef=await createUserDocumentFromAuth(user);
        // console.log(userDocRef);
    }
    // const logGoogleRedirectUser=async()=>{
    //     const {user}=await signInWithGoogleRedirect();
    //     console.log(user);
        
    //     // const userDocRef=await createUserDocumentFromAuth(user);
    //     // console.log(userDocRef);
    // }

    
    
    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button>
            <SignUpForm/>
        </div>
    );
}

export default SignIn;