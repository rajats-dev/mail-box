import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name: "auth",
  initialState: { isUserLoggedIn: false },
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
