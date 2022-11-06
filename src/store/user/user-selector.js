export const selectCurrentUser=(state)=>{
    console.log("user selector");
    return state.user.currentUser;
}