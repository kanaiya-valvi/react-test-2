import { createSlice } from "@reduxjs/toolkit";
const intialValue = {
  modal: false,
  notes: [],
};
const userSlice = createSlice({
  name: "Notes",
  initialState: intialValue,
  reducers: {
    addNote(state, action) {
      state.notes.push(action.payload);
    },
    showModal(state, action) {      
      state.modal = action.payload;
    },
    hideModal(state, action) {      
      state.modal = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { addNote, showModal, hideModal } = userSlice.actions;
