import { createSlice } from '@reduxjs/toolkit';

// Initial state of the user
const initialState = {
  name: '',
  gender: '',
  children: [],
  email: '',
  password: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Action to set the name of the user
    setName: (state, action) => {
      state.name = action.payload;
    },
    // Action to set the gender of the user
    setGender: (state, action) => {
      state.gender = action.payload;
    },
    // Action to set the children of the user
    setChildren: (state, action) => {
      state.children = action.payload;
    },
    // Action to set the email of the user
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    // Action to set the password of the user
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    // Action to reset the user state
    resetUser: () => initialState,
  },
});

export const { setName, setGender, setChildren, setEmail, setPassword, resetUser } = userSlice.actions;
export default userSlice.reducer;
