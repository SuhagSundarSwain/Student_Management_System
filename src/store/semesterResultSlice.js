import { createSlice } from "@reduxjs/toolkit";

const semesterSlice = createSlice({
  name: "semester",
  initialState: {
    semesterList: [1, 2, 3, 4, 5, 6, 7, 8],
    currentSelectedSemester: 1,
  },
  reducers: {
    setCurrentSelectedSemester: (state, action) => {

    state.currentSelectedSemester=action.payload.selectedSemester
    },
  },
});

export const semesterResultActions = semesterSlice.actions;
export default semesterSlice;
