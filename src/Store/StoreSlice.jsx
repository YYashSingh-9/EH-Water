import { createSlice } from "@reduxjs/toolkit";

const InitialState = {};

const FirstSlice = createSlice({
  name: "FirstSlice",
  initialState: InitialState,
  reducers: {},
});

export const sliceActions = FirstSlice.actions;
export default FirstSlice;
