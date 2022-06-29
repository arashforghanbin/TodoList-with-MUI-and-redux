import { createSlice } from "@reduxjs/toolkit"

const init = {
  taskList : []
}

const taskListReducer = createSlice({
  name: taskListReducer,
  initialState: init,
  reducers: {
    add: (state, action)=> {
      state.taskList.push(action.payload)
    }
  }
})