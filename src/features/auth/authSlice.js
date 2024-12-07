import {
  getCookieValue,
  removeCookies,
  setCookieWithToken,
} from "@/utils/cookies";
import { createSlice } from "@reduxjs/toolkit";

const authToken = getCookieValue("authToken");
const authUser = getCookieValue("authUser")
  ? JSON.parse(getCookieValue("authUser"))
  : null;

const initialState = {
  token: authToken,
  user: authUser,
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;

      // if remember true set token in cookies otherwise in session storage
      if (action.payload.rememberMe) {
        setCookieWithToken(action.payload.token, action.payload.user);
      } else {
        sessionStorage.setItem("authToken", action.payload.token);
        sessionStorage.setItem("authUser", JSON.stringify(action.payload.user));
      }
    },
    userLoggedOut: (state) => {
      state.token = undefined;
      state.user = undefined;
      removeCookies();
      sessionStorage.removeItem("authToken");
      sessionStorage.removeItem("authUser");
    },

    updateUserState: (state, action) => {
      state.user = action.payload.user;
      if (state.token) {
        setCookieWithToken(state.token, action.payload.user);
      } else {
        sessionStorage.setItem("authUser", JSON.stringify(action.payload.user));
      }
    },
  },
});

export const { userLoggedIn, userLoggedOut, updateUserState } =
  authSlice.actions;

export default authSlice.reducer;
