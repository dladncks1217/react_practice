import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "../store";
import AppLayout from "../components/AppLayout";

const Index = () => {
  return (
    <>
      <Provider store={store}>
        <AppLayout />
      </Provider>
    </>
  );
};
export default Index;

//
