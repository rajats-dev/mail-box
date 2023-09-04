import { createSlice } from "@reduxjs/toolkit";

const mailSlice = createSlice({
  name: "mail",
  initialState: { items: [], isRead: false },
  reducers: {
    mailData(state, action) {
      state.items = action.payload;
    },
    updateStatus(state, action) {
      let existingItem = state.items.find(
        (item) => item.ckey === action.payload
      );
      console.log(existingItem);
      console.log(state.items);

      if (existingItem) {
        existingItem.isRead = true;
        //   state.isRead = true;
      }
    },

    // deleteItem(state, action) {
    //   let existingItem = state.items.find(
    //     (item) => item.ckey === action.payload
    //   );

    //   state.items = state.items.filter(
    //     (item) => item.ckey !== existingItem.ckey
    //   );
    // },
  },
});

export const mailAction = mailSlice.actions;

export default mailSlice;
