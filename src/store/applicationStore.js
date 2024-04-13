import { configureStore } from "@reduxjs/toolkit";
import loginSignupSlice from "./loginSignupSlice";
import sideBarTabSlice from "./sideBarTabSlice";
import semesterSlice from "./semesterResultSlice";
import userInfoSlice from "./userInfo";
import fetchStatusSlice from "./fetchingSlice";

const applicationStore = configureStore({
  reducer: {
    loginSignup: loginSignupSlice.reducer,
    sideBarTab: sideBarTabSlice.reducer,
    semester: semesterSlice.reducer,
    userInfo: userInfoSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
  },
});

export default applicationStore;
