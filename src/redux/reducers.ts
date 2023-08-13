import { combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "./features/authSlice";

export const rootReducer = combineReducers({
  user: authSlice.reducer,
});
