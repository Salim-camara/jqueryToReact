import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "./reducers/RootReducer";

const STORE = configureStore({
  reducer: RootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default STORE;
