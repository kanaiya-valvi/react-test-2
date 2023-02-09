import { createSlice } from "@reduxjs/toolkit";
let intialValue = {
  modal: false,
  notes: [],
  noOfList: 0,
};
const data = localStorage.getItem("list");
const userList = JSON.parse(data);
if (userList !== null) {
  intialValue = userList;
}
if (intialValue.notes.length === 0) {
  intialValue.noOfList = 0;
}

// const
const userSlice = createSlice({
  name: "Notes",
  initialState: intialValue,
  reducers: {
    addNote(state, action) {
      state.notes.push(action.payload);
      state.noOfList += 1;
      const list = { ...state };
      localStorage.setItem("list", JSON.stringify(list));
    },
    showModal(state, action) {
      state.modal = action.payload;
      const list = { ...state };
      localStorage.setItem("list", JSON.stringify(list));
    },
    hideModal(state, action) {
      state.modal = action.payload;
      const list = { ...state };
      localStorage.setItem("list", JSON.stringify(list));
    },
    deleteNote(state, action) {
      state.notes = state.notes.filter((item) => item.id !== action.payload);
      if (state.notes.length === 0) state.noOfList = 0;
      const list = { ...state };
      localStorage.setItem("list", JSON.stringify(list));
    },
    dragNotes(state, action) {
      state.notes = state.notes.map((list) => {
        if (list.id == action.payload.id) {
          return { ...list, category: action.payload.cat };
        } else {
          return { ...list };
        }
      });
      const list = { ...state };
      localStorage.setItem("list", JSON.stringify(list));
    },
  },
});

export default userSlice.reducer;
export const { addNote, showModal, hideModal, dragNotes, deleteNote } =
  userSlice.actions;
