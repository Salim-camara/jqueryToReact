import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "./reducers/RootReducer";

export const STORE = configureStore({
  reducer: RootReducer,
  devTools: true,
});
