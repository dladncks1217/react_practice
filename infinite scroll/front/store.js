import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
