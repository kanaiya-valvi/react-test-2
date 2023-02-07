import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const userSlice = createSlice({
  name: "Notes",
  initialState: [],
  reducers: {
    addNote(state, action) {
      state.push(action.payload);
    },
  },
});

export default userSlice.reducer;
export const { addNote } = userSlice.actions;
