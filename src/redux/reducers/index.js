import { combineReducers } from "@reduxjs/toolkit";
import {persistReducer} from "redux-persist";
import isNewTaskOpenReducer from "./openNewTaskReducer";
import storage from "redux-persist/lib/storage";

const combinedReducers = combineReducers({
  newTaskModal: isNewTaskOpenReducer,
});

const persistedReducer = persistReducer({
  key: 'reduxPersist-root',
  storage,
  whitelist: []},
  combinedReducers)


  export default persistedReducer;