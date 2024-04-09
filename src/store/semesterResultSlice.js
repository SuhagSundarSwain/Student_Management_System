import { createSlice } from "@reduxjs/toolkit";

const semesterSlice = createSlice({
  name: "semester",
  initialState: {
    semesterList: [1, 2, 3, 4, 5, 6, 7, 8],
    currentSelectedSemester: 1,
    semesterDetails: [
      { SUBJECT_CODE: "UHSMH701", SUBJECT: "PYTHON", CREDIT: "5", GRADE: "A" },
      { SUBJECT_CODE: "UHERH701", SUBJECT: "JAVA", CREDIT: "7", GRADE: "E" },
      {
        SUBJECT_CODE: "SDFFH701",
        SUBJECT: "JAVASCRIPT",
        CREDIT: "3",
        GRADE: "O",
      },
    ],
  },
  reducers: {
    setCurrentSelectedSemester: (state, action) => {
      state.currentSelectedSemester = action.payload.selectedSemester;
    },
  },
});

export const semesterResultActions = semesterSlice.actions;
export default semesterSlice;
