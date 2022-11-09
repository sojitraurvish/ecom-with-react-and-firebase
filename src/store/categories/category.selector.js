//Note :- every we should write our business logic inside selector and we should store our pure data inside database

//first time it return {} object //useSelector function run when reducer update if selector function return value change and here every time it will return a brand new object but now here is some problem this category selector get run even when user object updated because root reducer combine all the objects but i want if i update user selector my category selector should not be updated and only category selector should be run or updated when categories object get updated in root-reducer so for that we going to use library called re Select inside of the redux ecosystem  
//see file category.component.jsx

// Memorization is this process in which you cache the previous value of something so that if the input has not changed , then you just return back the same output 
// And this work when you have pure function see below

import {createSelector} from "reselect"; // here we have to cerate input selector output selector 
//input selector give use parameters that we need in order to determine what our output should be

//this is initial selector that gives us categories is object from root reducer
const selectCategoryReducer=(state)=>{// So now when our user get updated our middleware run and it pass all action to the all reducer and when all reducer get updated it pass all object like (user,categories) to the root reducer and when root reducer get update it run all the selector but now this selector will check categories object is change if not then it will return from this function and with old value so that way in category.component.jsx useSelector() hook will not rerender the component
    console.log("selector 1 fired");
    return state.categories
}; 

// memorize selector And this function give us categories array that lives on the category slice og out redux state
export const selectCategories=createSelector(//this memorize selector will only run when inside input selector selectCategoryReducer gives us new value
    [selectCategoryReducer,/*selectCurrentUser*/],//array of input selector -> the input selector is going to be what do i want as part of the parameters that i'm going to use inside output selector to produce what the selector should return back 
    (categoriesSlice,/*currentUser*/)=>{//output selector // here whatever the output of the input selector will be the argument inside of the output selector
        console.log("selector 2 fired");
        return categoriesSlice.categories;
    }
)

export const selectCategoriesMap=createSelector(
    [selectCategories],
    (categories)=>{
        console.log("selector 3 fired");
        return categories
        .reduce((acc,category)=>{
            const {title,items}=category;
            acc[title.toLowerCase()]=items;
            return acc;
        },{})
    }
);

export const selectCategoriesIsLoading=createSelector(
    [selectCategoryReducer],
    (categoriesSlice)=>categoriesSlice.isLoading
);

//Note - here in selectCartTotal is memorize selector and in it createSelector has two argument and when you call this function first it will call [selectCartItems] this method inside array and if it found any change with previous state than only it will run second argument function   

// export const selectCategoriesMap=(state)=>{
//     console.log("selector fired");
//     return state.categories.categories
//     .reduce((acc,category)=>{
//         const {title,items}=category;
//         acc[title.toLowerCase()]=items;
//         return acc;
//     },{})
// }

/*
 * Pure function
 * const add = (a,b)=>a+b; 
 *  
 * add(a,b); // Here if you will call this function with this same value than it will give you same value that way we will use the concept of caching. so that we will store of cache that value and will reuse it we don't need to call that function again but this only posable in case of pure function
 * 
 * Impure function
 * const c=6;
 * const add = (a,b) => a+b+c;
 * add(a,b);
 *
 * */ 
