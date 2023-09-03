import { createSlice } from "@reduxjs/toolkit";

const mailSlice = createSlice({
  name: "mail",
  initialState: { items: [] },
  reducers: {
    mailData(state, action) {
      state.items = action.payload;
    },
  },
});

export const mailAction = mailSlice.actions;

export default mailSlice;
