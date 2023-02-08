import { createSlice } from "@reduxjs/toolkit";
const intialValue = {
  modal: false,
  notes: [],
  noOfList: 0,
};
const userSlice = createSlice({
  name: "Notes",
  initialState: intialValue,
  reducers: {
    addNote(state, action) {
      state.notes.push(action.payload);
      state.noOfList += 1;
    },
    showModal(state, action) {
      state.modal = action.payload;
    },
    hideModal(state, action) {
      state.modal = action.payload;
    },
    dragNotes(state, action) {
      state.notes = state.notes.map((list) => {
        if (list.id == action.payload.id) { 
          return { ...list, category: action.payload.cat };
        } else {
          return { ...list };
        }
      });
    },
  },
});

export default userSlice.reducer;
export const { addNote, showModal, hideModal, dragNotes } = userSlice.actions;
