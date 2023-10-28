import { createSlice } from "@reduxjs/toolkit";

const InitialState = {
  loginState: false,
  currentUserObject: {},
  currentUserId: "",
  cookieTokenVal: "",
  EditEmailInput: "",
  EditNameInput: "",
  titleInput: "",
  cityInput: "",
  issueDetails: "",
  allIssues: [],
  allReviews: [],
  searchTerm: "",
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
      let oldData = JSON.parse(localStorage.getItem("user_data"));
      const data = {
        data: newData,
        token: oldData.token,
      };
      oldData = data;
      localStorage.setItem("user_data", JSON.stringify(oldData));
      state.currentUserObject = oldData.data;
      (state.EditEmailInput = state.currentUserObject.email),
        (state.EditNameInput = state.currentUserObject.name);
    },
    logout_cookie_remover(state, action) {
      localStorage.clear();
      state.loginState = false;
      state.cookieTokenVal = "";
    },
    fieldClear(state, action) {
      state.titleInput = "";
      state.cityInput = "";
      state.issueDetails = "";
    },
    gettingAllIssues(state, action) {
      const allIssues = action.payload;
      state.allIssues = allIssues;
      console.log(state.allIssues);
    },
    gettingAllIssueReview(state, action) {
      const reviews = action.payload;
      state.allReviews = reviews;
    },
    SearchBarTerm(state, action) {
      let searchTerm = action.payload; //getting the searched string value
      let searchTerm_uppercase = searchTerm.charAt(0).toUpperCase(); //taking out first element(letter) , converting to uppercase
      let searchTerm_rest = searchTerm.slice(1); //taking out rest of string without first element(letter)
      const finalSearchTerm = searchTerm_uppercase.concat(searchTerm_rest); // making it a whole search elem with first letter as capital
      // const finalSearchTerm = searchTerm.toCapitalize();
      state.searchTerm = finalSearchTerm;
    },
  },
});

export const sliceActions = FirstSlice.actions;
export default FirstSlice;
