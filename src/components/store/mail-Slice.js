import { createSlice } from "@reduxjs/toolkit";

const mailSlice = createSlice({
  name: "mail",
  initialState: { items: [], isRead: false, someChange: false },
  reducers: {
    mailData(state, action) {
      state.items = action.payload;
    },

    someChanges(state) {
      state.someChange = !state.someChange;
    },
  },
});

export const mailAction = mailSlice.actions;

export default mailSlice;
