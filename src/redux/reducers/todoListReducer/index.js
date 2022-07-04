import { createSlice } from "@reduxjs/toolkit";

const init = {
  todoList: [],
  foundTask: {},
};

const todoListReducer = createSlice({
  name: "todoListReducer",
  initialState: init,
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    deleteTodo: (state, action) => {
      const NewTodoList = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );
      state.todoList = NewTodoList;
    },
    viewTodo: (state, action) => {
      const chosenTask = state.todoList.find(
        (todo) => todo.id === action.payload
      );
      state.foundTask = chosenTask;
    },
  },
});

export const { addTodo, deleteTodo, viewTodo } = todoListReducer.actions;
export default todoListReducer.reducer;
