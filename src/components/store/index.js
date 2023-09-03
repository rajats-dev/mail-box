import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./auth-Slice";
import mailSlice from "./mail-Slice";

const store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
    mail: mailSlice.reducer,
  },
});

export default store;
