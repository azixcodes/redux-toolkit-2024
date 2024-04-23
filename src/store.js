import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/CounterSlice";
import todoReducer from "./slices/TodoSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
  },
});
