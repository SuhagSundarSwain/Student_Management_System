import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: { fetching: true },
  reducers: {
    setFetchStart: (state) => {
      state.fetching = true;
    },
    setFetchEnd: (state) => {
      state.fetching = false;
    },
  },
});

export const fetchStatusActions = fetchStatusSlice.actions;
export default fetchStatusSlice;
