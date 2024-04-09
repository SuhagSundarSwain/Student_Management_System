import { createSlice } from "@reduxjs/toolkit";

const sideBarTabSlice = createSlice({
  name: "sideBarTab",
  initialState: {
    tab: "",
  },
  reducers: {
    setTabToResult: (state) => {
      state.tab = "result";
    },
    setTabToDashboard: (state) => {
      state.tab = "dashboard";
    },
    setTabToNull: (state) => {
      state.tab = "";
    },
  },
});

export const sideBarTabActions = sideBarTabSlice.actions;
export default sideBarTabSlice;
