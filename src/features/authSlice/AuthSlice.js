import { createSlice } from "@reduxjs/toolkit";

const initialToken = localStorage.getItem("token");

const AuthSlice = createSlice({
  name: "auth",
  token: initialToken,
  initialState: { isUserLoggedIn: !!initialToken },
  reducers: {
    login(state) {
      state.isUserLoggedIn = true;
    },
    logout(state) {
      state.isUserLoggedIn = false;
    },
  },
});

export const AuthAction = AuthSlice.actions;

export default AuthSlice;
