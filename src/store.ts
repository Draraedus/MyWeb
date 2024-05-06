import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./data/reducers/authReducer";

const reducer = combineReducers({
  auth: authReducer,
});

const store = configureStore({
  reducer,
});

export default store;
