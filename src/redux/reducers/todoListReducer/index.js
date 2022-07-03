import { createSlice } from "@reduxjs/toolkit";

const init = {
  todoList: [],
};

const todoListReducer = createSlice({
  name: "todoListReducer",
  initialState: init,
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
  },
});

export const { addTodo } = todoListReducer.actions;
export default todoListReducer.reducer;
