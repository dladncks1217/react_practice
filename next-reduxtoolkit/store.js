import toolkit, { configureStore } from "@reduxjs/toolkit";

import reducer from "./reducers";
import { addPost } from "./actions/post";
import { logIn, logOut } from "./actions/user";

const firstMiddleware = (store) => (next) => (action) => {
  console.log("로깅", action);
  next(action);
};

const store = configureStore({
  reducer,
  middleware: [firstMiddleware],
  devTools: process.env.NODE_ENV !== "production",
  // preloadedState: initialState같은건데 SSR할때 써먹자.
});

module.exports = store;
