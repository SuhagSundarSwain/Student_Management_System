import { createSlice } from "@reduxjs/toolkit";

const loginSignupSlice = createSlice({
  name: "loginSignup",
  initialState: {
    loginPage: null, //true: for login page false: for signup page
  },
  reducers: {
    setLogin: (state, action) => {
      state.loginPage = true;
    },
    setSignup: (state, action) => {
      state.loginPage = false;
    },
  },
});

export const loginSignupActions = loginSignupSlice.actions;
export default loginSignupSlice;
