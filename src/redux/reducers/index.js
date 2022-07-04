import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import taskReducer from "./taskReducer";
import todoListReducer from "./todoListReducer";
import openModalReducer from "./openModalReducer";

const combinedReducers = combineReducers({
  openModalReducer,
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
