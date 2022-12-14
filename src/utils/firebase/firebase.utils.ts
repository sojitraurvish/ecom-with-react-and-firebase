// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; //this initializeApp initialize app and help to connect this instance with server instance that we have cerated at google firebase
import {
    getAuth,//HERE we also have to create auth instance
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    // FacebookAuthProvider
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    NextOrObserver,
    User
} from "firebase/auth"; 

//------------------ as like firebase , firestore is difference storage
import {
    getFirestore,//here also we have to initialize firestore instance in order to communicate with it
    doc,//retrieve document instance inside our fire store database but how do you get or set that data on this documents / here it gives document instance but in order to get and set data you have to use getDoc and setDoc 
    getDoc,
    setDoc,
    collection,
    writeBatch,//for transactions,
    query,
    getDocs,
    QueryDocumentSnapshot
} from "firebase/firestore";
import { Category } from "../../store/categories/category.types";

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
const firebaseApp = initializeApp(firebaseConfig); //this initializeApp initialize app and help to connect this instance with server instance that we have cerated at google firebase

const googleProvider=new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt:"select_account"
});

export const auth=getAuth();//here we create auth instance

export const signInWithGooglePopup=()=>signInWithPopup(auth,googleProvider);
export const signInWithGoogleRedirect=()=>signInWithRedirect(auth,googleProvider);

//------------------------------------------

// initialize fire store instance in order to communicate
export const db=getFirestore();

export type AdditionalInformation={
    displayName?:string
}

export type UserData={
    createdAt:Date;
    displayName:string;
    email:string;
}

export const createUserDocumentFromAuth=async (userAuth:User,additionalInformation={} as AdditionalInformation):Promise<QueryDocumentSnapshot<UserData> | void>=>{
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
            console.log("Error creating the user",err);
        }
    } 

    // If user data exists
    return userSnapshot as QueryDocumentSnapshot<UserData>;
}

//==========================================================
export const createAuthUserWithEmailAndPassword=async (email:string,password:string)=>{
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth,email,password);
}

export const signInAuthUserWithEmailAndPassword=async(email:string,password:string)=>{
    if(!email || !password)return;

    return await signInWithEmailAndPassword(auth,email,password);
}

export const signOutUser=async()=>await signOut(auth);

export const onAuthStateChangedListener=(callback:NextOrObserver<User>)=>
onAuthStateChanged(auth,callback); // Whenever auth's state changes this callback function get run and it kind of open listener but here one problem that when user sing out and this listener still listening it so, it consider as memory lick and that why this function return as unsubscribe function that will unmount this listener form memory 

export type ObjectsToAdd={
    title:string
}

export const addCollectionAndDocuments=async <T extends ObjectsToAdd>(collectionKey:string,objectsToAdd:T[]):Promise<void>=>{
    const collectionRef=collection(db,collectionKey);
     
    const batch=writeBatch(db);

   objectsToAdd.forEach((object)=>{ 
    const docRef=doc(collectionRef,object.title.toLowerCase()); 
    batch.set(docRef,object);
   });

   await batch.commit();
   console.log("done");
}

export const getCategoriesAndDocuments=async():Promise<Category[]>=>{
    const collectionRef=collection(db,"categories");
    const q=query(collectionRef);

    const querySnapshot=await getDocs(q);

    // const categoryMap=querySnapshot.docs.reduce((acc,docShapshot)=>{
    //     const {title,items}=docShapshot.data();
    //     acc[title.toLowerCase()]=items;
    //     return acc;
    // },{});

    const categoryMap=querySnapshot.docs.map(docSnapshot=>docSnapshot.data() as Category);

    return categoryMap;
}

export const getCurrentUser=():Promise<User | null>=>{
    return new Promise((resolve,reject)=>{
        const unsubscribe=onAuthStateChanged(
            auth,
            (userAuth)=>{
                unsubscribe();
                resolve(userAuth);
            },
            reject
        )
    })
}