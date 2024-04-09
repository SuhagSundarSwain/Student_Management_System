import { configureStore } from "@reduxjs/toolkit";
import loginSignupSlice from "./loginSignupSlice";
import sideBarTabSlice from "./sideBarTabSlice";
import semesterSlice from "./semesterResultSlice";

const applicationStore = configureStore({
  reducer: {
    loginSignup: loginSignupSlice.reducer,
    sideBarTab: sideBarTabSlice.reducer,
    semester: semesterSlice.reducer,
  },
});

export default applicationStore;
