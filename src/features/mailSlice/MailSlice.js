import { createSlice } from "@reduxjs/toolkit";

const MailSlice = createSlice({
  name: "mail",
  initialState: {
    itemsInbox: [],
    itemsSentBox: [],
    someChange: false,
    clickItem: {},
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
      state.clickItem = action.payload;
    },
    totalUnread(state, action) {
      state.unReadMess = action.payload;
    },
    someChanges(state) {
      state.someChange = !state.someChange;
    },
  },
});

export const MailAction = MailSlice.actions;

export default MailSlice;
