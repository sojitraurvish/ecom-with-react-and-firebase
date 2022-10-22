// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    // FacebookAuthProvider
    createUserWithEmailAndPassword
} from "firebase/auth"; 
import {
    getFirestore,
    doc,//retrieve document inside our fire store database but how do you get or set that data on this documents / here it gives document instance but in order to get and set data you have to use getDoc and setDoc 
    getDoc,
    setDoc
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjn-5tDeHPngYX0LCJSFx4fJFXoyFjzqQ",
  authDomain: "crwn-clothing-db-d771a.firebaseapp.com",
  projectId: "crwn-clothing-db-d771a",
  storageBucket: "crwn-clothing-db-d771a.appspot.com",
  messagingSenderId: "290239551911",
  appId: "1:290239551911:web:d2cec040e9b8045ec5fe82"
};
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider=new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt:"select_account"
});

export const auth=getAuth();

export const signInWithGooglePopup=()=>signInWithPopup(auth,googleProvider);
export const signInWithGoogleRedirect=()=>signInWithRedirect(auth,googleProvider);

//------------------------------------------

export const db=getFirestore();

export const createUserDocumentFromAuth=async (userAuth,additionalInformation={})=>{
    if(!userAuth) return;
    const userDocRef=doc(db,"users",userAuth.uid);

    // console.log(userDocRef);

    const userSnapshot=await getDoc(userDocRef);
    // console.log(userSnapshot);
    // console.log(userSnapshot.exists());

    // If user data not exists
    // create / set document with the data from userAuth in my collection
    if(!userSnapshot.exists()){
        const {displayName,email} =userAuth;
        const createdAt=new Date();

        try{
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt,
                ...additionalInformation
            })
        }catch(err){
            console.log("Error creating the user",err.message);
        }
    } 

    // If user data exists
    return userDocRef;
}

//==========================================================
export const createAuthUserWithEmailAndPassword=async (email,password)=>{
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth,email,password);
}