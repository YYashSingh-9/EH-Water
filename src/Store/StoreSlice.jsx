import { createSlice } from "@reduxjs/toolkit";

const InitialState = {
  LoginEmailInput: "",
  LoginPasswordInput: "",
  EditNameInput: "",
  EditEmailInput: "",
  EditPasswordInput: "",
  EditPasswordConfirmInput: "",
  SignUpNameInput: "",
  SignUpEmailInput: "",
  SignUpPasswordInput: "",
  SignUpPasswordConfirmInput: "",
};

const FirstSlice = createSlice({
  name: "FirstSlice",
  initialState: InitialState,
  reducers: {
    editValuesSet(state, action) {
      const vals = action.payload;
      state.EditEmailInput = vals.emailInput;
      state.EditNameInput = vals.nameInput;
      console.log(state.EditEmailInput, state.EditNameInput);
    },
  },
});

export const sliceActions = FirstSlice.actions;
export default FirstSlice;
