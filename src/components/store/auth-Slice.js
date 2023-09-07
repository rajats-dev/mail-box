import { createSlice } from "@reduxjs/toolkit";

const initialtoken = localStorage.getItem("token");

const AuthSlice = createSlice({
  name: "auth",
  token: initialtoken,
  initialState: { isUserLoggedIn: !!initialtoken },
  reducers: {
    login(state) {
      state.isUserLoggedIn = true;
    },
    logout(state) {
      state.isUserLoggedIn = false;
    },
  },
});

export const authAction = AuthSlice.actions;

export default AuthSlice;
