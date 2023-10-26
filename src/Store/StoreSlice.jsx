import { createSlice } from "@reduxjs/toolkit";

const InitialState = {
  loginState: false,
  currentUserObject: {},
  currentUserId: "",
  cookieTokenVal: "",
  EditEmailInput: "",
  EditNameInput: "",
};

const FirstSlice = createSlice({
  name: "FirstSlice",
  initialState: InitialState,
  reducers: {
    set_token_to_localStorage(state, action) {
      const actionObj = action.payload;
      localStorage.clear();
      localStorage.setItem("user_data", JSON.stringify(actionObj));
      const user_data = JSON.parse(localStorage.getItem("user_data"));
      state.currentUserObject = user_data.data;
      state.currentUserId = user_data.data._id;
      state.cookieTokenVal = user_data.token;
    },
    get_token_from_localStorage(state, action) {
      const cookieToken = JSON.parse(localStorage.getItem("user_data"));
      if (!cookieToken || cookieToken.token.length < 2) {
        return;
      } else if (cookieToken.token && cookieToken.token.length > 5) {
        state.cookieTokenVal = cookieToken.token;
        state.currentUserObject = cookieToken.data;
        state.loginState = true;
        (state.EditEmailInput = state.currentUserObject.email),
          (state.EditNameInput = state.currentUserObject.name);
      }
    },
    update_token_from_localStorage(state, action) {
      const newData = action.payload;
      const oldData = JSON.parse(localStorage.getItem("user_data"));
      oldData.data = newData;
      localStorage.setItem("user_data", JSON.stringify(oldData));
      state.currentUserObject = oldData.data;
    },
    logout_cookie_remover(state, action) {
      localStorage.clear();
      state.loginState = false;
      state.cookieTokenVal = "";
    },
  },
});

export const sliceActions = FirstSlice.actions;
export default FirstSlice;
