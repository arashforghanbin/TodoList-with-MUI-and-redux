import { createSlice } from "@reduxjs/toolkit";

const init = {
  task: {
    taskName: "",
    priority: "high",
    status: "todo",
    deadline: "",
    description: "",
  },
};

const taskReducer = createSlice({
  name: "taskReducer",
  initialState: init,
  reducers: {
    taskNameReducer: (state, action) => {
      state.task.taskName = action.payload;
    },
    priorityReducer: (state, action) => {
      state.task.priority = action.payload;
    },
    statusReducer: (state, action) => {
      state.task.status = action.payload;
    },
    deadlineReducer: (state, action) => {
      state.task.deadline = action.payload;
    },
    descriptionReducer: (state, action) => {
      state.task.description = action.payload;
    },
  },
});

export const {
  taskNameReducer,
  priorityReducer,
  statusReducer,
  deadlineReducer,
  descriptionReducer,
} = taskReducer.actions;
export default taskReducer.reducer;
