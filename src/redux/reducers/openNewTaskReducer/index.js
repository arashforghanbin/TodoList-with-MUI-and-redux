import { createSlice } from "@reduxjs/toolkit";

const init = {
  isNewTaskOpen: false,
};

const isNewTaskOpenReducer = createSlice({
  name: "isNewTaskOpenReducer",
  initialState: init,
  reducers: {
    changeIsOpen: (state) => {
      state.isNewTaskOpen = true;
    },
    isClose: (state) => {
      state.isNewTaskOpen = false
    }
  },
});

export const { changeIsOpen, isClose } = isNewTaskOpenReducer.actions;
export default isNewTaskOpenReducer.reducer;
