import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import isNewTaskOpenReducer from "./openNewTaskReducer";
import storage from "redux-persist/lib/storage";
import taskReducer from "./taskReducer";
import todoListReducer from "./todoListReducer";

const combinedReducers = combineReducers({
  newTaskModal: isNewTaskOpenReducer,
  taskReducer,
  todoListReducer
});

const persistedReducer = persistReducer(
  {
    key: "reduxPersist-root",
    storage,
    whitelist: ["todoListReducer"],
  },
  combinedReducers
);

export default persistedReducer;
