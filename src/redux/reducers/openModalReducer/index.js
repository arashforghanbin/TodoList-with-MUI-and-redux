import { createSlice } from "@reduxjs/toolkit";

const init = {
  isNewTaskOpen: false,
  isViewTaskOpen: false,
};

const openModalReducer = createSlice({
  name: "isNewTaskOpenReducer",
  initialState: init,
  reducers: {
    newTaskIsOpen: (state) => {
      state.isNewTaskOpen = true;
    },
    newTaskIsClosed: (state) => {
      state.isNewTaskOpen = false;
    },
    viewTaskIsOpen: (state) => {
      state.isViewTaskOpen = true;
    },
    viewTaskIsClosed: (state) => {
      state.isViewTaskOpen = false;
    },
  },
});

export const {
  newTaskIsOpen,
  newTaskIsClosed,
  viewTaskIsOpen,
  viewTaskIsClosed,
} = openModalReducer.actions;
export default openModalReducer.reducer;
