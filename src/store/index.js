import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "./reducers/RootReducer";
import { getDefaultMiddleware } from "@reduxjs/toolkit";

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

const STORE = configureStore({
  reducer: RootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default STORE;
