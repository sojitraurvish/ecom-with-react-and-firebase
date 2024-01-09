import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  currentUser: null,
  test: { a: 1 },
};

export const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload; 
      // in redux state is immutable but here it seems that we are mutating state but under the hood it create a brand new object this only mutation style and when it find mutation it create new object = assigning is mutation
    },
  },
});

export const { setCurrentUser } = userSlice.actions;

export const userReducer = userSlice.reducer;

// above we have generated slice that not only replaces reducer but also type and action



// export const userReducer = (state = INITIAL_STATE, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case USER_ACTION_TYPES.SET_CURRENT_USER:
//       return { ...state, currentUser: payload };
//     default:
//       return state;
//   }
// };

