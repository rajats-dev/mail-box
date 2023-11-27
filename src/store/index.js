import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../features/authSlice/AuthSlice";
import MailSlice from "../features/mailSlice/MailSlice";

const store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
    mail: MailSlice.reducer,
  },
});

export default store;
