import { createSlice } from "@reduxjs/toolkit";

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: { loggedInStatus: null, user: null },
  reducers: {
    setLoggedInStatus: (state, actions) => {
      state.loggedInStatus = actions.payload.loggedInStatus;
    },
    setUserId: (state, actions) => {
      state.user = actions.payload.userId;
      return state;
    },
    logout: (state) => {
      state.loggedInStatus = null;
      state.user = null;
    },
  },
});

export const userInfoActions = userInfoSlice.actions;
export default userInfoSlice;
