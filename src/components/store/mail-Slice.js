import { createSlice } from "@reduxjs/toolkit";

const mailSlice = createSlice({
  name: "mail",
  initialState: {
    itemsInbox: [],
    itemsSentBox: [],
    someChange: false,
    clickitem: {},
    unReadMess: null,
  },
  reducers: {
    inboxData(state, action) {
      state.itemsInbox = action.payload;
    },
    sentboxData(state, action) {
      state.itemsSentBox = action.payload;
    },
    clickItem(state, action) {
      state.clickitem = action.payload;
    },
    totalUnread(state, action) {
      state.unReadMess = action.payload;
    },
    someChanges(state) {
      state.someChange = !state.someChange;
    },
  },
});

export const mailAction = mailSlice.actions;

export default mailSlice;
