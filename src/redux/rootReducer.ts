import { combineReducers } from "@reduxjs/toolkit";
import itemsReducer from "./slices/itemsSlice";

const rootReducer = combineReducers({
  items: itemsReducer, // Use the reducer, not the slice
});

export default rootReducer;