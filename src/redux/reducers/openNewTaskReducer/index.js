import { createSlice } from "@reduxjs/toolkit";

const init = {
  isNewTaskOpen: false,
};

const isNewTaskOpenReducer = createSlice({
  name: isNewTaskOpenReducer,
  initialState: init,
  reducers: {
    changeIsOpen: (state) => {
      console.log(state);
      state.isNewTaskOpen = true;
    },
  },
});

export const { changeIsOpen } = isNewTaskOpenReducer.actions;
export default isNewTaskOpenReducer.reducer;
